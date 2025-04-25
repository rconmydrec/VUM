namespace Todo.Web.Api.Models
{
    public class CreateTodoListInput
    {
        public int?    OwnerId     { get; set; }
        public string? Description { get; set; }
    }
}
