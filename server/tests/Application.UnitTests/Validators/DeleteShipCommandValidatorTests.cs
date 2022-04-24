using FluentValidation.TestHelper;
using ShipManagement.Application.Ships.Commands.DeleteShip;
using ShipManagement.Application.UnitTests.Fixtures;
using ShipManagement.Infrastructure.Persistence;
using Xunit;

namespace ShipManagement.Application.UnitTests.Validators;
public class DeleteShipCommandValidatorTests
{
    private readonly TestFixture _fixture;
    private readonly ApplicationDbContext _context;

    public DeleteShipCommandValidatorTests()
    {
        _fixture = new TestFixture();
        _context = _fixture.Context;
    }

    [Fact]
    public void ShouldBeInvalidWhenShipDoesntExist()
    {
        var command = new DeleteShipCommand
        {
            Id = Guid.NewGuid(),
        };

        new DeleteShipCommandValidator(_context).TestValidate(command).ShouldHaveValidationErrorFor(r => r.Id);
    }
}
