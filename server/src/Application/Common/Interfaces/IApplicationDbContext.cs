using ShipManagement.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace ShipManagement.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<Ship> Ships { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
