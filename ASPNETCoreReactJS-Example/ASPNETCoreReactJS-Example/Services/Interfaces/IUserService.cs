namespace ASPNETCoreReactJS_Example.Services.Interfaces
{
    using ASPNETCoreReactJS_Example.Models;
    using System.Collections.Generic;

    public interface IUserService
    {
        IEnumerable<UserViewModel> All();
    }
}