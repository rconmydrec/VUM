namespace Todo.Web.Clients.Models
{
    public class CreateTodoTaskInputModel
    {
        public int?      OwnerId     { get; set; }
        public int?      TodoId      { get; set; }
        public string?   Description { get; set; }
        public DateTime? DueDate     { get; set; }
    }
}
