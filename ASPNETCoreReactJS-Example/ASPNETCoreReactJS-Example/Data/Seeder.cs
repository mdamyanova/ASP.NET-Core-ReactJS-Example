namespace ASPNETCoreReactJS_Example.Data
{
    using ASPNETCoreReactJS_Example.Data.Models;
    using Microsoft.AspNetCore.Identity;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class Seeder
    {
        private readonly ExampleDbContext db;
        private readonly UserManager<User> userManager;

        public Seeder(ExampleDbContext db, UserManager<User> userManager)
        {
            this.db = db;
            this.userManager = userManager;
        }

        public async Task Seed()
        {
            var users = new List<User>
            {
                new User
                {
                    UserName = "Test1",
                    FullName = "Test Test1",
                    Email = "test1@test.t"
                },
                new User
                {
                    UserName = "Test2",
                    FullName = "Test Test2",
                    Email = "test2@test.t"
                },
                new User
                {
                    UserName = "Test3",
                    FullName = "Test Test3",
                    Email = "test3@test.t"
                },
                new User
                {
                    UserName = "Test4",
                    FullName = "Test Test4",
                    Email = "test4@test.t"
                },
                new User
                {
                    UserName = "Test5",
                    FullName = "Test Test5",
                    Email = "test5@test.t"
                }
            };

            if (!this.db.Users.Any())
            {
                foreach (var user in users)
                {
                    await this.userManager.CreateAsync(user, "test");
                }

                await this.db.SaveChangesAsync();
            }
        }
    }
}