using FluentValidation;
using Microsoft.EntityFrameworkCore;
using ShipManagement.Application.Common.Interfaces;

namespace ShipManagement.Application.Ships.Commands.UpdateShip;
public class UpdateShipCommandValidator : AbstractValidator<UpdateShipCommand>
{
    public UpdateShipCommandValidator(IApplicationDbContext context)
    {
        RuleFor(command => command.Id)
            .MustAsync((id, cancellation) => context.Ships.AnyAsync(ship => ship.Id == id))
            .WithMessage("Ship with specified Id doesn't exist");

        RuleFor(command => command.Name).NotEmpty();

        RuleFor(command => command.Width).GreaterThan(0);

        RuleFor(command => command.Length).GreaterThan(0);
    }
}
