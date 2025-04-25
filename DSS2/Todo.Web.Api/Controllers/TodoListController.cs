using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using Todo.Domain.Services;
using Todo.Web.Api.Models;

namespace Todo.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoListController : ControllerBase
    {
        private readonly ITodoListService _service;
        public TodoListController(ITodoListService service) => _service = service;


        [HttpGet("{id:int}")]
        public IActionResult Get([FromRoute, Required] int? id)
            => _service.GetTodoList(id!.Value) is { } list
               ? Ok(list)
               : NotFound($"TodoList {id} not found");

        [HttpGet]
        public IActionResult GetAll() => Ok(_service.GetTodoLists());


        [HttpPost]
        public IActionResult Create([FromBody] CreateTodoListInput input)
        {
            _service.Create(input.OwnerId, input.Description!);
            return Ok();
        }


        [HttpPut("{id:int}")]
        public IActionResult Update(
            int id,
            [FromBody] UpdateTodoListInput input)
        {
            _service.Update(id, input.Description!, input.IsActive);
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
