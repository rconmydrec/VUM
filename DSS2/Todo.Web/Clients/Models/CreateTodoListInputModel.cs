namespace Todo.Web.Clients.Models
{
    public class CreateTodoListInputModel
    {
        public int?    OwnerId     { get; set; }
        public string? Description { get; set; }
    }
}
