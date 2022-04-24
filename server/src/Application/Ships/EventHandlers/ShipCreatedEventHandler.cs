using MediatR;
using Microsoft.Extensions.Logging;
using ShipManagement.Application.Common.Models;
using ShipManagement.Domain.Events;

namespace ShipManagement.Application.Ships.EventHandlers;

public class ShipCreatedEventHandler : INotificationHandler<DomainEventNotification<ShipCreatedEvent>>
{
    private readonly ILogger<ShipCreatedEventHandler> _logger;

    public ShipCreatedEventHandler(ILogger<ShipCreatedEventHandler> logger)
    {
        _logger = logger;
    }

    public Task Handle(DomainEventNotification<ShipCreatedEvent> notification, CancellationToken cancellationToken)
    {
        // Send notification, enqueue a job, etc.
        _logger.LogInformation("Ship Management Domain Event: {DomainEvent}. Ship Code: {ShipName}", notification.DomainEvent.GetType().Name, notification.DomainEvent.Ship.Name);

        return Task.CompletedTask;
    }
}
