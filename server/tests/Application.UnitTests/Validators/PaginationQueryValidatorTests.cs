using FluentValidation.TestHelper;
using ShipManagement.Application.Common.Models;
using ShipManagement.Application.Common.Validators;
using Xunit;

namespace ShipManagement.Application.UnitTests.Validators;
public class PaginationQueryValidatorTests
{
    [Fact]
    public void ShoudBeInvalidWhenPageNumberIsLessThanOne()
    {
        var query = new PaginationQuery
        {
            PageNumber = 0
        };

        var sut = new PaginationQueryValidator();

        sut.TestValidate(query).ShouldHaveValidationErrorFor(r => r.PageNumber);
    }

    [Fact]
    public void ShoudBeInvalidWhenPageSizeIsLessThanOne()
    {
        var query = new PaginationQuery
        {
            PageSize = 0
        };

        var sut = new PaginationQueryValidator();

        sut.TestValidate(query).ShouldHaveValidationErrorFor(r => r.PageSize);
    }
}
