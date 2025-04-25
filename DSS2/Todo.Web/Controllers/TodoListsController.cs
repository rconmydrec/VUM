using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Todo.Web.Clients.Inerfaces;   
using Todo.Web.Clients.Models;
using Todo.Web.Models;

namespace Todo.Web.Controllers
{
    [Authorize]
    public class TodoListsController : Controller
    {
        private readonly ITodoListClient _listClient;
        private readonly ITodoTaskClient _taskClient;

        public TodoListsController(
            ITodoListClient listClient,
            ITodoTaskClient taskClient)
        {
            _listClient = listClient;
            _taskClient = taskClient;
        }

        public async Task<IActionResult> Index()
        {
            var lists = await _listClient.GetAll();

            var vm = lists.Select(l => new TodoListViewModel
            {
                Id            = l.Id,
                Description   = l.Description,
                IsActive      = l.IsActive,
                Date          = l.Date,
                NumberOfTasks = l.NumberOfTasks
            });

            return View(vm);
        }

        public async Task<IActionResult> Details(int? id)
        {
            if (id == null) return NotFound();

            var list = await _listClient.Get(id);
            if (list == null) return NotFound();

            var allTasks = await _taskClient.GetAll();
            var ownTasks = allTasks
                .Where(t => t.TodoId == list.Id)
                .Select(t => new TodoTaskViewModel
                {
                    Id          = t.Id,
                    Description = t.Description,
                    IsCompleted = t.IsCompleted,
                    DueDate     = t.DueDate,
                    TodoId      = t.TodoId
                })
                .ToArray();

            ViewBag.Tasks = ownTasks; 

            return View(new TodoListViewModel
            {
                Id            = list.Id,
                Description   = list.Description,
                IsActive      = list.IsActive,
                Date          = list.Date,
                NumberOfTasks = list.NumberOfTasks
            });
        }

        public IActionResult Create() => View();

        [HttpPost, ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(CreateTodoListViewModel model)
        {
            if (!ModelState.IsValid) return View(model);

            var ownerId = int.Parse(User.FindFirstValue("userId"));
            await _listClient.Create(new CreateTodoListInputModel
            {
                OwnerId     = ownerId,
                Description = model.Description!
            });

            return RedirectToAction(nameof(Index));
        }

        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null) return NotFound();

            var list = await _listClient.Get(id);
            if (list == null) return NotFound();

            return View(new TodoListViewModel
            {
                Id          = list.Id,
                Description = list.Description,
                IsActive    = list.IsActive
            });
        }

        [HttpPost, ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(
            int? id,
            [Bind("Id,Description,IsActive")] TodoListViewModel model)
        {
            if (id != model.Id) return NotFound();
            if (!ModelState.IsValid) return View(model);

            await _listClient.Update(id, new UpdateTodoListInputModel
            {
                Description = model.Description,
                IsActive    = model.IsActive
            });

            return RedirectToAction(nameof(Index));
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null) return NotFound();

            var list = await _listClient.Get(id);
            if (list == null) return NotFound();

            return View(new TodoListViewModel
            {
                Id          = list.Id,
                Description = list.Description
            });
        }

        [HttpPost, ActionName("Delete"), ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int? id)
        {
            if (id != null) await _listClient.Delete(id);
            return RedirectToAction(nameof(Index));
        }
    }
}
