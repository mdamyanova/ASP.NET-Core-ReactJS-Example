namespace ASPNETCoreReactJS_Example.Data.Models
{
    using Microsoft.AspNetCore.Identity;
    using System.Collections.Generic;

    public class User : IdentityUser
    {     
        public string FullName { get; set; }

        public IEnumerable<Score> Scores { get; set; } = new List<Score>();
    }
}