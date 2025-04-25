namespace Todo.Web.Api.Models
{
    public class UpdateTodoTaskInput : CreateTodoTaskInput
    {
        public bool? IsCompleted { get; set; }
    }
}
