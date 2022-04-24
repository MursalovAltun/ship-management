using FluentValidation.TestHelper;
using ShipManagement.Application.Ships.Commands.UpdateShip;
using ShipManagement.Application.UnitTests.Fixtures;
using ShipManagement.Infrastructure.Persistence;
using Xunit;

namespace ShipManagement.Application.UnitTests.Validators;
public class UpdateShipCommandValidatorTests
{
    private readonly UpdateShipCommand _validCommand = new UpdateShipCommand
    {
        Name = "TestName",
        Length = 22,
        Width = 10
    };
    private readonly TestFixture _fixture;
    private readonly ApplicationDbContext _context;

    public UpdateShipCommandValidatorTests()
    {
        _fixture = new TestFixture();
        _context = _fixture.Context;
    }

    [Fact]
    public void ShouldBeInvalidWhenShipDoesntExist()
    {
        _validCommand.Id = Guid.NewGuid();

        new UpdateShipCommandValidator(_context).TestValidate(_validCommand).ShouldHaveValidationErrorFor(r => r.Id);
    }

    [Theory]
    [InlineData("")]
    [InlineData(null)]
    public void ShouldBeInvalidWhenNameIsEmpty(string name)
    {
        _validCommand.Name = name;

        new UpdateShipCommandValidator(_context).TestValidate(_validCommand).ShouldHaveValidationErrorFor(r => r.Name);
    }

    [Fact]
    public void ShouldBeInvalidWhenLengthIsLessThanOne()
    {
        _validCommand.Length = 0;

        new UpdateShipCommandValidator(_context).TestValidate(_validCommand).ShouldHaveValidationErrorFor(r => r.Length);
    }

    [Fact]
    public void ShouldBeInvalidWhenWidthIsLessThanOne()
    {
        _validCommand.Width = 0;

        new UpdateShipCommandValidator(_context).TestValidate(_validCommand).ShouldHaveValidationErrorFor(r => r.Width);
    }
}