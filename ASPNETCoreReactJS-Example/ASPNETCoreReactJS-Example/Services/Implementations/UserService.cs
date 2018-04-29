namespace ASPNETCoreReactJS_Example.Services.Implementations
{
    using ASPNETCoreReactJS_Example.Data.Models;
    using ASPNETCoreReactJS_Example.Models;
    using AutoMapper.QueryableExtensions;
    using Data;
    using Interfaces;
    using System.Collections.Generic;
    using System.Linq;

    public class UserService : IUserService
    {
        private readonly ExampleDbContext db;

        public UserService(ExampleDbContext db)
        {
            this.db = db;
        }

        public IEnumerable<UserViewModel> All()
            => this.db.Users.ProjectTo<UserViewModel>();

        public void Add(User user)
        {
            var exists = Exists(user.Id);

            if (!exists)
            {
                this.db.Users.Add(user);
                this.db.SaveChanges();
            }

        }

        private bool Exists(string id)
            => this.db.Users.Any(u => u.Id == id);
    }
}