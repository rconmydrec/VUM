using System.ComponentModel.DataAnnotations;

namespace NotesManager.Api.Models
{
    public class Note
    {
        public int Id { get; set; }
        
        [Required]
        public string Title { get; set; }
        
        public string Description { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public string UserId { get; set; }
    }
}