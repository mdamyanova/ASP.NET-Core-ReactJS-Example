namespace ASPNETCoreReactJS_Example.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Models;
    using Services.Interfaces;
    using System.Collections.Generic;

    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUserService service;

        public UsersController(IUserService service)
        {
            this.service = service;
        }

        [HttpGet("[action]")]
        public IEnumerable<UserViewModel> All()
            => this.service.All();
    }
}