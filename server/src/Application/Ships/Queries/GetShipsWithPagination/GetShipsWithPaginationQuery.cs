using AutoMapper;
using AutoMapper.QueryableExtensions;
using ShipManagement.Application.Common.Interfaces;
using ShipManagement.Application.Common.Mappings;
using ShipManagement.Application.Common.Models;
using ShipManagement.Application.Ships.DTO;
using MediatR;

namespace ShipManagement.Application.Ships.Queries.GetshipsWithPagination;

public class GetShipsWithPaginationQuery : PaginationQuery, IRequest<PaginatedList<ShipResponseDto>>
{

    public class GetShipsWithPaginationQueryHandler : IRequestHandler<GetShipsWithPaginationQuery, PaginatedList<ShipResponseDto>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetShipsWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<PaginatedList<ShipResponseDto>> Handle(GetShipsWithPaginationQuery request, CancellationToken cancellationToken)
        {
            return await _context.Ships
                .OrderBy(x => x.Name)
                .ProjectTo<ShipResponseDto>(_mapper.ConfigurationProvider)
                .PaginatedListAsync(request.PageNumber, request.PageSize);
        }
    }
}
