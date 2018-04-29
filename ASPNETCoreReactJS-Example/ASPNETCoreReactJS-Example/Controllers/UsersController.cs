namespace ASPNETCoreReactJS_Example.Controllers
{
    using Data.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using Models;
    using Services.Interfaces;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly ILogger logger;
        private readonly IUserService service;

        public UsersController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            ILogger<UsersController> logger,
            IUserService service)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.logger = logger;
            this.service = service;
        }

        [HttpGet("[action]")]
        public IEnumerable<UserViewModel> All()
            => this.service.All();

        [HttpPost("[action]")]
        public async Task<IActionResult> Register([FromBody]RegisterModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }

            var user = new User()
            {
                UserName = model.UserName,
                FullName = model.FullName,
                Email = model.Email
            };

            IdentityResult result = await this.userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                return this.BadRequest();
            }

            this.service.Add(user);

            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody]LoginModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }

            var result = await this.signInManager.PasswordSignInAsync(model.UserName, model.Password, isPersistent: true, lockoutOnFailure: false);

            if (!result.Succeeded)
            {
                return this.BadRequest();
            }

            return this.Ok();
        }

        private IActionResult GetError(IdentityResult result)
        {
            if (result == null)
            {
                return BadRequest();
            }

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError("errors", error.ToString());
                    }
                }

                if (ModelState.IsValid)
                {
                    return BadRequest();
                }

                return BadRequest(ModelState);
            }

            return null;
        }
    }
}