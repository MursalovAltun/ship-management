using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ShipManagement.Application.Common.Interfaces;
using ShipManagement.Infrastructure.Persistence;
using ShipManagement.Infrastructure.Services;

namespace ShipManagement.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseInMemoryDatabase("ShipManagementDB").UseLazyLoadingProxies()
        );

        services.AddScoped<IDomainEventService, DomainEventService>();

        services.AddScoped<IApplicationDbContext>(provider => provider.GetRequiredService<ApplicationDbContext>());

        services.AddTransient<IDateTime, DateTimeService>();

        return services;
    }
}
