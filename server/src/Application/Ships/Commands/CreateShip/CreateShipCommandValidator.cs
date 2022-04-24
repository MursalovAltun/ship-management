using System.Text.RegularExpressions;
using FluentValidation;

namespace ShipManagement.Application.Ships.Commands.CreateShip;

public class CreateShipCommandValidator : AbstractValidator<CreateShipCommand>
{
    public CreateShipCommandValidator()
    {
        RuleFor(command => command.Name).NotEmpty();

        RuleFor(command => command.Code)
            .Cascade(CascadeMode.Stop)
            .NotEmpty()
            .Must(code => Regex.IsMatch(code, "/^[A-Z]{4}-[1-9]{4}-[A-Z][1-9]$/gim"));

        RuleFor(command => command.Width).GreaterThan(0);

        RuleFor(command => command.Length).GreaterThan(0);
    }
}
