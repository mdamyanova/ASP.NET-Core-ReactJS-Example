namespace ASPNETCoreReactJS_Example.Controllers
{
    using Data.Models;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using Microsoft.IdentityModel.Tokens;
    using Models;
    using Services.Interfaces;
    using System;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Security.Claims;
    using System.Text;
    using System.Threading.Tasks;

    [Route("api/[controller]/[action]")]
    public class UsersController : Controller
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly IConfiguration configuration;
        private readonly IUserService service;

        public UsersController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IConfiguration configuration,
            IUserService service)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
            this.service = service;
        }

        // GET All Users
        [HttpGet]
        public IEnumerable<UserViewModel> All()
            => this.service.All();

        // POST Register User
        [HttpPost]
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

            // Automatically sign in user ? 
            //this.signInManager.SignInAsync(user, false);

            return this.Ok(GenerateJwtToken(model.Email, user));
        }

        // POST Login User
        [HttpPost]
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

            var appUser = this.userManager.Users.SingleOrDefault(u => u.UserName == model.UserName);
            return this.Ok(GenerateJwtToken(model.UserName, appUser));
        }

        // POST Logout User
        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await this.signInManager.SignOutAsync();

            return this.Ok();
        }

        private object GenerateJwtToken(string email, IdentityUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));

            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}