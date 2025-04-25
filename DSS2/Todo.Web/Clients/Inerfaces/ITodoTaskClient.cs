using Refit;
using System.ComponentModel.DataAnnotations;
using Todo.Web.Clients.Models;

namespace Todo.Web.Clients.Inerfaces  
{
    public interface ITodoTaskClient
    {

        [Get("/{id}")]
        Task<TodoTaskModel?> Get([Required] int? id);

        [Get("")]
        Task<TodoTaskModel[]> GetAll();


        [Post("")]
        Task Create([Body] CreateTodoTaskInputModel model);


        [Put("/{id}")]
        Task Update([Required] int? id,
                    [Body] UpdateTodoTaskInputModel model);


        [Delete("/{id}")]
        Task Delete([Required] int? id);
    }
}
