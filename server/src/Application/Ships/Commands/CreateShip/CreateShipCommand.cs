using AutoMapper;
using ShipManagement.Application.Common.Interfaces;
using ShipManagement.Application.Ships.DTO;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShipManagement.Domain.Events;

namespace ShipManagement.Application.Ships.Commands.CreateShip;

public class CreateShipCommand : IRequest<ShipResponseDto>
{
    public string Name { get; set; }

    public int Length { get; set; }

    public int Width { get; set; }

    public string Code { get; set; }

    public class CreateShipCommandHandler : IRequestHandler<CreateShipCommand, ShipResponseDto>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;


        public CreateShipCommandHandler(IApplicationDbContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ShipResponseDto> Handle(CreateShipCommand request, CancellationToken cancellationToken)
        {
            var ship = _context.Ships.CreateProxy();

            ship.Name = request.Name.Trim();
            ship.Length = request.Length;
            ship.Width = request.Width;
            ship.Code = request.Code.ToUpper().Trim();

            ship.DomainEvents.Add(new ShipCreatedEvent(ship));

            await _context.Ships.AddAsync(ship, cancellationToken);

            await _context.SaveChangesAsync(cancellationToken);

            return _mapper.Map<ShipResponseDto>(ship);
        }
    }
}