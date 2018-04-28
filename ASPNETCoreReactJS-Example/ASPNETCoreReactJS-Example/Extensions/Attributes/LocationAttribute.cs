namespace ASPNETCoreReactJS_Example.Data.Models
{
    using Enums;
    using System;
    using System.ComponentModel.DataAnnotations;

    public class LocationAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            var location = value as string;

            if (location == null)
            {
                return true;
            }

            if (Enum.TryParse(location, out Towns town))
            {
                return true;
            }

            return false;
        }
    }
}