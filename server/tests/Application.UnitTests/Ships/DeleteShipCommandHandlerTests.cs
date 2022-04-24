using FluentAssertions;
using ShipManagement.Application.Ships.Commands.DeleteShip;
using ShipManagement.Application.UnitTests.Fixtures;
using ShipManagement.Domain.Entities;
using ShipManagement.Infrastructure.Persistence;
using Xunit;

namespace ShipManagement.Application.UnitTests.Ships;
public class DeleteShipCommandHandlerTests
{
    private readonly TestFixture _fixture;
    private readonly ApplicationDbContext _context;

    public DeleteShipCommandHandlerTests()
    {
        _fixture = new TestFixture();
        _context = _fixture.Context;
    }

    [Fact]
    public async Task ShouldDeleteShipById()
    {
        var shipId = Guid.NewGuid();

        _context.Ships.Add(new Ship { Id = shipId });
        _context.SaveChanges();

        var sut = new DeleteShipCommand.DeleteShipCommandHandler(_context);

        await sut.Handle(new DeleteShipCommand { Id = shipId }, CancellationToken.None);

        _context.Ships.Should().BeEmpty();
    }
}
