using AutoMapper;
using ShipManagement.Application.Common.Interfaces;
using ShipManagement.Application.Ships.DTO;
using MediatR;

namespace ShipManagement.Application.Ships.Commands.UpdateShip;

public class UpdateShipCommand : IRequest<ShipResponseDto>
{
    public Guid Id { get; set; }

    public string Name { get; set; }

    public int Length { get; set; }

    public int Width { get; set; }

    public class UpdateShipCommandHandler : IRequestHandler<UpdateShipCommand, ShipResponseDto>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;


        public UpdateShipCommandHandler(IApplicationDbContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ShipResponseDto> Handle(UpdateShipCommand request, CancellationToken cancellationToken)
        {
            var ship = await _context.Ships.FindAsync(request.Id);

            ship.Name = request.Name.Trim();
            ship.Length = request.Length;
            ship.Width = request.Width;

            _context.Ships.Update(ship);

            await _context.SaveChangesAsync(cancellationToken);

            return _mapper.Map<ShipResponseDto>(ship);
        }
    }
}