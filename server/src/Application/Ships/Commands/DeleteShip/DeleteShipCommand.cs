using ShipManagement.Application.Common.Interfaces;
using MediatR;

namespace ShipManagement.Application.Ships.Commands.DeleteShip;

public class DeleteShipCommand : IRequest
{
    public Guid Id { get; set; }

    public class DeleteShipCommandHandler : IRequestHandler<DeleteShipCommand>
    {
        private readonly IApplicationDbContext _context;

        public DeleteShipCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteShipCommand command, CancellationToken cancellationToken)
        {
            var ship = await _context.Ships.FindAsync(command.Id);

            _context.Ships.Remove(ship);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}