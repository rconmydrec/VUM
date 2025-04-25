using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Security.Claims;
using Refit;
using Todo.Web.Clients.Inerfaces;
using Todo.Web.Models;

namespace Todo.Web.Controllers
{
    public class LoginController : Controller
    {
        private readonly IUserClient _userClient;

        public LoginController(IUserClient userClient)
        {
            _userClient = userClient;
        }

        public IActionResult Index() => View();

        [HttpPost, ValidateAntiForgeryToken]
        public async Task<IActionResult> Index([Bind("Name,Password")] LoginViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            int? userId;
            try
            {
                userId = await _userClient.ValidatePassword(new()
                {
                    Name = model.Name!,
                    Password = model.Password!
                });
            }
            catch (ValidationApiException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
            {
                ModelState.AddModelError(string.Empty, "Invalid user name or password");
                return View(model);
            }
            catch (ApiException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
            {
                ModelState.AddModelError(string.Empty, "Invalid user name or password");
                return View(model);
            }

            var user = await _userClient.GetById(userId);
            if (user is null)
            {
                ModelState.AddModelError(string.Empty, "Invalid user name or password");
                return View(model);
            }

            await SignInAsync(user.Id, user.Name!, user.IsAdmin);
            return RedirectToAction(nameof(HomeController.Index), "Home");
        }

        [HttpGet]
        public IActionResult Register() => View();

        [HttpPost, ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            if (model.Password != model.RepeatPassword)
            {
                ModelState.AddModelError(nameof(model.RepeatPassword), "Passwords don't match");
                return View(model);
            }

            try
            {
                var userId = await _userClient.CreateUser(new()
                {
                    IsAdmin = false,
                    Name = model.Name!,
                    Password = model.Password!
                });

                await SignInAsync(userId, model.Name!, false);
            }
            catch (ApiException ex)
            {
                ModelState.AddModelError(string.Empty, ex.Content ?? "Registration failed");
                return View(model);
            }

            return RedirectToAction(nameof(HomeController.Index), "Home");
        }

        [HttpGet]
        [Microsoft.AspNetCore.Authorization.Authorize]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return RedirectToAction(nameof(Index));
        }

        private async Task SignInAsync(int? userId, string userName, bool isAdmin)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, userName),
                new Claim("userId", userId?.ToString() ?? string.Empty),
                new Claim(ClaimTypes.Role, isAdmin ? "Administrator" : "User")
            };

            var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            await HttpContext.SignInAsync(new ClaimsPrincipal(identity));
        }
    }
}
