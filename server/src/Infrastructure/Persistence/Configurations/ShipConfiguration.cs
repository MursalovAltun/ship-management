using ShipManagement.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ShipManagement.Infrastructure.Persistence.Configurations;
public class ShipConfiguration : IEntityTypeConfiguration<Ship>
{
    public void Configure(EntityTypeBuilder<Ship> builder)
    {
        builder.ToTable("Ships");

        builder.Ignore(entity => entity.DomainEvents);

        builder.HasKey(entity => entity.Id);

        builder.Property(entity => entity.Name)
            .HasMaxLength(120)
            .IsRequired(false);

        builder.Property(entity => entity.Length);

        builder.Property(entity => entity.Width);

        builder.Property(entity => entity.Code)
            .IsRequired(false);
    }
}
