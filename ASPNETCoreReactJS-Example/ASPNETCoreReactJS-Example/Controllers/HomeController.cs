namespace ASPNETCoreReactJS_Example.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        // Test action for authorized users only
        [Authorize]
        public IActionResult Example()
        {
            return this.Ok();
        }
    }
}