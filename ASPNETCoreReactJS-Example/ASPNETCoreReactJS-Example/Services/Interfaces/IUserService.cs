namespace ASPNETCoreReactJS_Example.Services.Interfaces
{
    using ASPNETCoreReactJS_Example.Models;
    using Data.Models;
    using System.Collections.Generic;

    public interface IUserService
    {
        IEnumerable<UserViewModel> All();
        void Add(User user);
        bool Exists(string id);
    }
}