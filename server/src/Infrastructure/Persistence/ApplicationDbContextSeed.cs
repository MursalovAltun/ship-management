using ShipManagement.Domain.Entities;

namespace ShipManagement.Infrastructure.Persistence;

public static class ApplicationDbContextSeed
{
    public static async Task SeedSampleDataAsync(ApplicationDbContext context)
    {
        if (!context.Ships.Any())
        {
            context.Ships.Add(new Ship
            {
                Name = "Test Ship Name",
                Code = "ADBC-9281-H3",
                Length = 120,
                Width = 40
            });

            await context.SaveChangesAsync();
        }
    }
}
