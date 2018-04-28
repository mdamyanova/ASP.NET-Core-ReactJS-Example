namespace ASPNETCoreReactJS_Example.Data
{
    using Models;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;

    public class ExampleDbContext : IdentityDbContext<User>
    {
        public ExampleDbContext(DbContextOptions<ExampleDbContext> options)
            : base(options)
        {
        }

        public DbSet<Score> Scores { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder
                .Entity<User>()
                .HasMany(u => u.Scores)
                .WithOne(s => s.User)
                .HasForeignKey(u => u.UserId);
       
            base.OnModelCreating(builder);
        }
    }
}