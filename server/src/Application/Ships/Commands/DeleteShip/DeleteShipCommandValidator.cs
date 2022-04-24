using FluentValidation;
using Microsoft.EntityFrameworkCore;
using ShipManagement.Application.Common.Interfaces;

namespace ShipManagement.Application.Ships.Commands.DeleteShip;
public class DeleteShipCommandValidator : AbstractValidator<DeleteShipCommand>
{
    public DeleteShipCommandValidator(IApplicationDbContext context)
    {
        RuleFor(command => command.Id)
            .MustAsync((id, cancellation) => context.Ships.AnyAsync(ship => ship.Id == id))
            .WithMessage("Ship with specified Id doesn't exist");
    }
}
