using System.ComponentModel.DataAnnotations;

namespace Todo.Web.Models
{
    public class CreateTodoListViewModel
    {
        [Required, StringLength(200)]
        public string? Description { get; set; }
    }
}
