namespace ASPNETCoreReactJS_Example.Services.Interfaces
{
    using ASPNETCoreReactJS_Example.Data.Models;
    using ASPNETCoreReactJS_Example.Models;
    using System.Collections.Generic;

    public interface IUserService
    {
        IEnumerable<UserViewModel> All();
        void Add(User user);
    }
}