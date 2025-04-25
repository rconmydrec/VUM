using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Security.Claims;
using Todo.Web.Clients.Inerfaces;      
using Todo.Web.Clients.Models;       
using Todo.Web.Models;              

namespace Todo.Web.Controllers
{
    [Authorize]
    public class TodoTasksController : Controller
    {
        private readonly ITodoTaskClient _taskClient;
        private readonly ITodoListClient _listClient;

        public TodoTasksController(
            ITodoTaskClient taskClient,
            ITodoListClient listClient)
        {
            _taskClient = taskClient;
            _listClient = listClient;
        }

        public async Task<IActionResult> Index()
        {
            var tasks = await _taskClient.GetAll();
            var lists = await _listClient.GetAll();

            ViewBag.ListNames = lists
                .Where(l => l.Id is not null)
                .ToDictionary(l => l.Id!.Value, l => l.Description);

            var vm = tasks.Select(t => new TodoTaskViewModel
            {
                Id          = t.Id,
                Description = t.Description,
                IsCompleted = t.IsCompleted,
                DueDate     = t.DueDate,
                TodoId      = t.TodoId          
            });

            return View(vm);
        }

        public async Task<IActionResult> Details(int? id)
        {
            if (id is null) return NotFound();

            var dto = await _taskClient.Get(id);
            if (dto is null) return NotFound();

            // Fetch list name for display
            string listName = "(unknown)";
            if (dto.TodoId is not null)
            {
                var list = await _listClient.Get(dto.TodoId);
                listName = list?.Description ?? listName;
            }
            ViewBag.ListName = listName;

            return View(new TodoTaskViewModel
            {
                Id          = dto.Id,
                Description = dto.Description,
                IsCompleted = dto.IsCompleted,
                DueDate     = dto.DueDate,
                TodoId      = dto.TodoId
            });
        }

        public async Task<IActionResult> Create()
        {
            await PopulateListsDropdownAsync();
            return View();
        }

        [HttpPost, ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(CreateTodoTaskViewModel model)
        {
            if (!ModelState.IsValid)
            {
                await PopulateListsDropdownAsync();
                return View(model);
            }

            var ownerId = int.Parse(User.FindFirstValue("userId"));

            await _taskClient.Create(new CreateTodoTaskInputModel
            {
                OwnerId     = ownerId,
                TodoId      = model.TodoId,
                Description = model.Description,
                DueDate     = model.DueDate
            });

            return RedirectToAction(nameof(Index));
        }

        public async Task<IActionResult> Edit(int? id)
        {
            if (id is null) return NotFound();

            var dto = await _taskClient.Get(id);
            if (dto is null) return NotFound();

            await PopulateListsDropdownAsync(dto.TodoId);

            return View(new TodoTaskViewModel
            {
                Id          = dto.Id,
                Description = dto.Description,
                IsCompleted = dto.IsCompleted,
                DueDate     = dto.DueDate,
                TodoId      = dto.TodoId
            });
        }

        [HttpPost, ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(
            int? id,
            [Bind("Id,Description,IsCompleted,DueDate,TodoId")] TodoTaskViewModel model)
        {
            if (id != model.Id) return NotFound();
            if (!ModelState.IsValid)
            {
                await PopulateListsDropdownAsync(model.TodoId);
                return View(model);
            }

            await _taskClient.Update(id, new UpdateTodoTaskInputModel
            {
                Description = model.Description,
                IsCompleted = model.IsCompleted,
                DueDate     = model.DueDate,
                TodoId      = model.TodoId,
                OwnerId     = null          
            });

            return RedirectToAction(nameof(Index));
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id is null) return NotFound();

            var dto = await _taskClient.Get(id);
            if (dto is null) return NotFound();

            return View(new TodoTaskViewModel
            {
                Id          = dto.Id,
                Description = dto.Description
            });
        }

        [HttpPost, ActionName("Delete"), ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int? id)
        {
            if (id is not null) await _taskClient.Delete(id);
            return RedirectToAction(nameof(Index));
        }

        private async Task PopulateListsDropdownAsync(int? selectedId = null)
        {
            var lists = await _listClient.GetAll();
            ViewBag.ListSelect = lists.Select(l => new SelectListItem
            {
                Value    = l.Id!.ToString(),
                Text     = l.Description,
                Selected = selectedId is not null && l.Id == selectedId
            });
        }
    }
}
