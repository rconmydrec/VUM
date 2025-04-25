using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using Todo.Domain.Services;
using Todo.Web.Api.Models;

namespace Todo.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoTaskController : ControllerBase
    {
        private readonly ITodoTaskService _service;
        public TodoTaskController(ITodoTaskService service) => _service = service;

        [HttpGet("{id:int}")]
        public IActionResult Get([FromRoute, Required] int? id)
            => _service.GetTodoList(id!.Value) is { } task
               ? Ok(task)
               : NotFound($"TodoTask {id} not found");

        [HttpGet]
        public IActionResult GetAll() => Ok(_service.GetTodoLists());

        [HttpPost]
        public IActionResult Create([FromBody] CreateTodoTaskInput input)
        {
            _service.Create(
                input.OwnerId,
                input.TodoId,
                input.Description!,
                input.DueDate!.Value);
            return Ok();
        }

        [HttpPut("{id:int}")]
        public IActionResult Update(int id, [FromBody] UpdateTodoTaskInput input)
        {
            _service.Update(
                id,
                input.Description!,
                input.IsCompleted!.Value,
                input.DueDate!.Value);
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok();
        }
    }
}
