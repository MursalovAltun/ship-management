using AutoMapper;
using ShipManagement.Application.Common.Interfaces;
using ShipManagement.Infrastructure.Persistence;

namespace ShipManagement.Application.UnitTests.Fixtures;
public class TestFixture
{
    public ApplicationDbContext Context { get; }
    public IMapper Mapper { get; }

    public TestFixture(params Type[] profileTypes)
    {
        if (profileTypes.Any(t => t.BaseType != typeof(Profile)))
        {
            throw new ArgumentException("Argument parameter must inherit AutoMapper.Profile");
        }

        Context = TestAppDbContextFactory.Create(null, null);

        var configurationProvider = new MapperConfiguration(cfg =>
        {
            var profiles = profileTypes
                .Select(type => Activator.CreateInstance(type) as Profile)
                .ToList();

            cfg.AddProfiles(profiles);
        });

        Mapper = configurationProvider.CreateMapper();
    }

    public TestFixture(IDomainEventService domainEventService, IDateTime dateTime, params Type[] profileTypes)
    {
        if (profileTypes.Any(t => t.BaseType != typeof(Profile)))
        {
            throw new ArgumentException("Argument parameter must inherit AutoMapper.Profile");
        }

        Context = TestAppDbContextFactory.Create(domainEventService, dateTime);

        var configurationProvider = new MapperConfiguration(cfg =>
        {
            var profiles = profileTypes
                .Select(type => Activator.CreateInstance(type) as Profile)
                .ToList();

            cfg.AddProfiles(profiles);
        });

        Mapper = configurationProvider.CreateMapper();
    }
}
