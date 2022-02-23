using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using TestTask_Oski.Data;
using TestTask_Oski.DTO;
using TestTask_Oski.Services;

namespace TestTask_Oski.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IJwtTokenService _tokenService;
        public AccountController(ApplicationDbContext context,
            IJwtTokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO model)
        {
            var user = await _context.Users.SingleOrDefaultAsync(
                x => x.Email == model.Email && x.Password == model.Password);
            if (user != null)
            {
                string token = _tokenService.CreateToken(user);
                return Ok(
                    new { token }
                );
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("profile")]
        [Authorize]
        public async Task<IActionResult> UserProfile()
        {
            try
            {
                //Thread.Sleep(2000);
                string userName = User.Claims.FirstOrDefault().Value;
                var user = await _context.Users.SingleOrDefaultAsync( x=>x.Email==userName);
  

                return Ok(user);
            }
            catch (Exception ex)
            {
                return NotFound(new
                {
                    invalid = ex.Message
                });
            }
        }
    }
}
