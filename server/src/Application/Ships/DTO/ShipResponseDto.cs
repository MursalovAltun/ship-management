using ShipManagement.Application.Common.Mappings;
using ShipManagement.Domain.Entities;

namespace ShipManagement.Application.Ships.DTO;

public class ShipResponseDto : IMapFrom<Ship>
{
    public Guid Id { get; set; }

    public string Name { get; set; }

    public int Length { get; set; }

    public int Width { get; set; }

    public string Code { get; set; }
}
