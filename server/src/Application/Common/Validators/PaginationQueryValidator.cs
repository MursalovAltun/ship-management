using ShipManagement.Application.Common.Models;
using FluentValidation;

namespace ShipManagement.Application.Common.Validators;

public class PaginationQueryValidator : AbstractValidator<PaginationQuery>
{
    public PaginationQueryValidator()
    {
        RuleFor(query => query.PageNumber)
            .GreaterThanOrEqualTo(1);

        RuleFor(query => query.PageSize)
            .GreaterThanOrEqualTo(1);
    }
}
