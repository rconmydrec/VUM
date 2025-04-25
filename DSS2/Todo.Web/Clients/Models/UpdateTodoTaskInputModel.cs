namespace Todo.Web.Clients.Models
{
    public class UpdateTodoTaskInputModel : CreateTodoTaskInputModel
    {
        public bool? IsCompleted { get; set; }
    }
}
