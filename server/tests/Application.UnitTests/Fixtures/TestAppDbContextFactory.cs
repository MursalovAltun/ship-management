using Microsoft.EntityFrameworkCore;
using Moq;
using ShipManagement.Application.Common.Interfaces;
using ShipManagement.Infrastructure.Persistence;

namespace ShipManagement.Application.UnitTests.Fixtures;
public class TestAppDbContextFactory
{
    public static ApplicationDbContext Create(IDomainEventService domainEventService, IDateTime dateTime)
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .UseLazyLoadingProxies()
            .Options;

        var mockDomainEventServcie = new Mock<IDomainEventService>();

        var mockDateTime = new Mock<IDateTime>();

        var context = new ApplicationDbContext(options, domainEventService ?? mockDomainEventServcie.Object, dateTime ?? mockDateTime.Object);

        context.Database.EnsureCreated();

        context.SaveChanges();

        return context;
    }
}
