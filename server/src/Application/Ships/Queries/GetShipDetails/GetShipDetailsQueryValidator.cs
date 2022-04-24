using ShipManagement.Application.Common.Interfaces;
using FluentValidation;
using Microsoft.EntityFrameworkCore;

namespace ShipManagement.Application.Ships.Queries.GetShipDetails;

public class GetShipDetailsQueryValidator : AbstractValidator<GetShipDetailsQuery>
{
    public GetShipDetailsQueryValidator(IApplicationDbContext context)
    {
        RuleFor(query => query.Id)
            .MustAsync(async (id, cancellation) => await context.Ships.AnyAsync(ship => ship.Id == id))
            .WithMessage("Ship with provided Id does not exist");
    }
}
