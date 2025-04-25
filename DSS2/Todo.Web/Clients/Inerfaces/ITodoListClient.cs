using Refit;
using System.ComponentModel.DataAnnotations;
using Todo.Web.Clients.Models;

namespace Todo.Web.Clients.Inerfaces
{
    public interface ITodoListClient
    {

        [Get("/{id}")]
        Task<TodoListModel?> Get([Required] int? id);

        [Get("")]
        Task<TodoListModel[]> GetAll();


        [Post("")]
        Task Create([Body] CreateTodoListInputModel model);


        [Put("/{id}")]
        Task Update([Required] int? id,
                    [Body] UpdateTodoListInputModel input);


        [Delete("/{id}")]
        Task Delete([Required] int? id);
    }
}
