namespace ASPNETCoreReactJS_Example.Extensions.Mapping
{
    using AutoMapper;
    using Data.Models;
    using Models;

    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            // List all mapping objects here
            CreateMap<User, UserViewModel>();
        }
    }
}