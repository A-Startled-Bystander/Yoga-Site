using Microsoft.EntityFrameworkCore;
using yoga_site_backend.Models;

namespace yoga_site_backend
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<TestTable> TestTable { get; set; }
    }
}
