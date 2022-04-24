namespace ShipManagement.Domain.Events;

public class ShipCreatedEvent : DomainEvent
{
    public Ship Ship { get; }

    public ShipCreatedEvent(Ship ship)
    {
        Ship = ship;
    }
}