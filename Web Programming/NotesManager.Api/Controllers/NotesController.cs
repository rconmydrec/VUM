using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotesManager.Api.Data;
using NotesManager.Api.Models;
using System.Security.Claims;

namespace NotesManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class NotesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public NotesController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetNotes(string search = "", DateTime? fromDate = null, DateTime? endDate = null, int page = 1, int pageSize = 10)
        {
            var userId = User.FindFirst("id")?.Value;
            var query = _context.Notes.Where(n => n.UserId == userId);
            
            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(n => n.Title.Contains(search));
            }
            if (fromDate.HasValue)
            {
                query = query.Where(n => n.CreatedAt >= fromDate.Value);
            }
            if (endDate.HasValue)
            {
                query = query.Where(n => n.CreatedAt <= endDate.Value);
            }
            
            var total = await query.CountAsync();
            var notes = await query.OrderByDescending(n => n.CreatedAt)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
            
            return Ok(new { total, notes });
        }
        
        // POST: api/Notes
        [HttpPost]
        public async Task<IActionResult> CreateNote([FromBody] CreateNoteDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var userId = User.FindFirst("id")?.Value;
            if (string.IsNullOrEmpty(userId))
                return BadRequest("User is not authenticated or token is missing the 'id' claim.");
            
            var note = new Note
            {
                Title = dto.Title,
                Description = dto.Description,
                UserId = userId,
                CreatedAt = DateTime.UtcNow
            };

            _context.Notes.Add(note);
            await _context.SaveChangesAsync();
            
            return Ok(note);
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNote(int id, [FromBody] UpdateNoteDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var userId = User.FindFirst("id")?.Value;
            var note = await _context.Notes.FirstOrDefaultAsync(n => n.Id == id && n.UserId == userId);
            if (note == null)
                return NotFound();
                
            note.Title = dto.Title;
            note.Description = dto.Description;
            
            _context.Notes.Update(note);
            await _context.SaveChangesAsync();
            
            return Ok(note);
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNote(int id)
        {
            var userId = User.FindFirst("id")?.Value;
            var note = await _context.Notes.FirstOrDefaultAsync(n => n.Id == id && n.UserId == userId);
            if (note == null)
                return NotFound();
                
            _context.Notes.Remove(note);
            await _context.SaveChangesAsync();
            
            return Ok(new { Message = "Note deleted successfully" });
        }
    }
}