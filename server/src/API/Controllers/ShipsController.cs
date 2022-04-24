using ShipManagement.Application.Common.Models;
using ShipManagement.Application.Ships.Commands.CreateShip;
using ShipManagement.Application.Ships.Commands.DeleteShip;
using ShipManagement.Application.Ships.Commands.UpdateShip;
using ShipManagement.Application.Ships.DTO;
using ShipManagement.Application.Ships.Queries.GetShipDetails;
using ShipManagement.Application.Ships.Queries.GetshipsWithPagination;
using Microsoft.AspNetCore.Mvc;

namespace ShipManagement.API.Controllers;

public class ShipsController : ApiControllerBase
{
    [HttpGet]
    public async Task<ActionResult<PaginatedList<ShipResponseDto>>> GetPaginatedList([FromQuery] GetShipsWithPaginationQuery query, CancellationToken token)
    {
        return await Mediator.Send(query, token);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ShipResponseDto>> GetDetails([FromRoute] Guid id, CancellationToken token)
    {
        return await Mediator.Send(new GetShipDetailsQuery { Id = id }, token);
    }

    [HttpPost]
    public async Task<ActionResult<ShipResponseDto>> Create([FromBody] CreateShipDto request, CancellationToken token)
    {
        return await Mediator.Send(new CreateShipCommand
        {
            Name = request.Name,
            Code = request.Code,
            Length = request.Length,
            Width = request.Width
        }, token);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<ShipResponseDto>> Update([FromRoute] Guid id, [FromBody] UpdateShipDto request, CancellationToken token)
    {
        return await Mediator.Send(new UpdateShipCommand
        {
            Id = id,
            Name = request.Name,
            Width = request.Width,
            Length = request.Length
        }, token);
    }

    [HttpDelete("{id}")]
    public async Task Delete([FromRoute] Guid id)
    {
        await Mediator.Send(new DeleteShipCommand { Id = id });
    }
}
