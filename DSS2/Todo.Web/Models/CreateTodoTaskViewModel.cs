using System.ComponentModel.DataAnnotations;

namespace Todo.Web.Models
{
    public class CreateTodoTaskViewModel
    {
        [Required, StringLength(200)]
        public string? Description { get; set; }

        [Required, DataType(DataType.Date)]
        public DateTime? DueDate { get; set; }

        [Required]
        public int? TodoId { get; set; }
    }
}
