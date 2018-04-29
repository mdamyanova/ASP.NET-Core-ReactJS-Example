namespace ASPNETCoreReactJS_Example.Controllers
{
    using Data.Models;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using Models;
    using Services.Interfaces;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly IUserService service;

        public UsersController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            ILogger<UsersController> logger,
            IUserService service)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.service = service;
        }

        // GET All Users
        [HttpGet("[action]")]
        public IEnumerable<UserViewModel> All()
            => this.service.All();

        // POST Register User
        [HttpPost("[action]")]
        public async Task<IActionResult> Register([FromBody]RegisterModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }

            // TODO
            var user = new User()
            {
                UserName = model.UserName,
                FullName = model.FullName,
                Email = model.Email
            };

            var result = await this.userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                return this.BadRequest();
            }

            this.service.Add(user);

            return this.Ok();
        }

        // POST Login User
        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody]LoginModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }

            var result = await this.signInManager.PasswordSignInAsync(
                model.UserName, model.Password, isPersistent: false, lockoutOnFailure: false);

            if (!result.Succeeded)
            {
                return this.BadRequest();
            }

            return this.Ok();
        }

        // POST Logout User
        [HttpPost("[action]")]
        public async Task<IActionResult> Logout()
        {
            await this.signInManager.SignOutAsync();

            return this.Ok();
        }
    }
}