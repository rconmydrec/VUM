using System.ComponentModel.DataAnnotations;

namespace NotesManager.Api.Models
{
    public class UpdateNoteDto
    {
        [Required]
        public string Title { get; set; }
        
        public string Description { get; set; }
    }
}