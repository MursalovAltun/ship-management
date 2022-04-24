namespace ShipManagement.Domain.Entities;
public class Ship : AuditableEntity, IHasDomainEvent
{
    public Guid Id { get; set; }

    public string Name { get; set; }

    public int Length { get; set; }

    public int Width { get; set; }

    public string Code { get; set; }

    public List<DomainEvent> DomainEvents { get; set; } = new List<DomainEvent>();
}
