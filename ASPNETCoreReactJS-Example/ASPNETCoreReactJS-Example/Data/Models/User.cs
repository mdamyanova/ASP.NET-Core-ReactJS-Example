namespace ASPNETCoreReactJS_Example.Data.Models
{
    using Microsoft.AspNetCore.Identity;
    using System.Collections.Generic;

    // We have the main properties using the provided from ASP.NET Core Identity 
    // so here we can add custom properties
    public class User : IdentityUser
    {     
        public string FullName { get; set; }

        public IEnumerable<Score> Scores { get; set; } = new List<Score>();
    }
}