using AutoMapper;
using AutoMapper.QueryableExtensions;
using ShipManagement.Application.Common.Interfaces;
using ShipManagement.Application.Ships.DTO;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ShipManagement.Application.Ships.Queries.GetShipDetails;

public class GetShipDetailsQuery : IRequest<ShipResponseDto>
{
    public Guid Id { get; set; }

    public class GetShipDetailsQueryHandler : IRequestHandler<GetShipDetailsQuery, ShipResponseDto>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetShipDetailsQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ShipResponseDto> Handle(GetShipDetailsQuery request, CancellationToken cancellationToken) =>
            await _context.Ships
                .Where(ship => ship.Id == request.Id)
                .ProjectTo<ShipResponseDto>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(cancellationToken);
    }
}