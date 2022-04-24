using ShipManagement.Application.Common.Validators;
using FluentValidation;

namespace ShipManagement.Application.Ships.Queries.GetshipsWithPagination;

public class GetShipsWithPaginationQueryValidator : AbstractValidator<GetShipsWithPaginationQuery>
{
    public GetShipsWithPaginationQueryValidator()
    {
        Include(new PaginationQueryValidator());
    }
}
