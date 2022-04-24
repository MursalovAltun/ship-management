using FluentValidation.TestHelper;
using ShipManagement.Application.Ships.Commands.CreateShip;
using Xunit;

namespace ShipManagement.Application.UnitTests.Validators;
public class CreateShipCommandValidatorTests
{
    private readonly CreateShipCommand _validCommand = new CreateShipCommand
    {
        Name = "TestName",
        Code = "TEST-1111-A1",
        Length = 22,
        Width = 10
    };

    [Theory]
    [InlineData("")]
    [InlineData(null)]
    public void ShouldBeInvalidWhenNameIsEmpty(string name)
    {
        _validCommand.Name = name;

        new CreateShipCommandValidator().TestValidate(_validCommand).ShouldHaveValidationErrorFor(r => r.Name);
    }

    [Theory]
    [InlineData("")]
    [InlineData(null)]
    public void ShouldBeInvalidWhenCodeIsEmpty(string code)
    {
        _validCommand.Code = code;

        new CreateShipCommandValidator().TestValidate(_validCommand).ShouldHaveValidationErrorFor(r => r.Code);
    }

    [Fact]
    public void ShouldBeInvalidWhenCodeDoesntMatchPattern()
    {
        _validCommand.Code = "testcode";

        new CreateShipCommandValidator().TestValidate(_validCommand).ShouldHaveValidationErrorFor(r => r.Code);
    }

    [Fact]
    public void ShouldBeInvalidWhenLengthIsLessThanOne()
    {
        _validCommand.Length = 0;

        new CreateShipCommandValidator().TestValidate(_validCommand).ShouldHaveValidationErrorFor(r => r.Length);
    }

    [Fact]
    public void ShouldBeInvalidWhenWidthIsLessThanOne()
    {
        _validCommand.Width = 0;

        new CreateShipCommandValidator().TestValidate(_validCommand).ShouldHaveValidationErrorFor(r => r.Width);
    }
}
