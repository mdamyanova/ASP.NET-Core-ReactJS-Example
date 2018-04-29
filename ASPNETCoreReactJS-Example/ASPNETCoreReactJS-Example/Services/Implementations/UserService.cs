namespace ASPNETCoreReactJS_Example.Services.Implementations
{
    using ASPNETCoreReactJS_Example.Models;
    using AutoMapper.QueryableExtensions;
    using Data;
    using Interfaces;
    using System.Collections.Generic;

    public class UserService : IUserService
    {
        private readonly ExampleDbContext db;

        public UserService(ExampleDbContext db)
        {
            this.db = db;
        }

        public IEnumerable<UserViewModel> All()
            => this.db.Users.ProjectTo<UserViewModel>();
    }
}