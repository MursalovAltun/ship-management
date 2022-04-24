using ShipManagement.Domain.Common;

namespace ShipManagement.Application.Common.Interfaces;

public interface IDomainEventService
{
    Task Publish(DomainEvent domainEvent);
}
