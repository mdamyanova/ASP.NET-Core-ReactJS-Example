namespace ASPNETCoreReactJS_Example.Extensions.Mapping
{
    using AutoMapper;
    using Data.Models;
    using Services.Models;

    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserServiceModel>();
        }
    }
}