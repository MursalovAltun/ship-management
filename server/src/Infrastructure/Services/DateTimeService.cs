using ShipManagement.Application.Common.Interfaces;

namespace ShipManagement.Infrastructure.Services;

public class DateTimeService : IDateTime
{
    public DateTime Now => DateTime.Now;
}
