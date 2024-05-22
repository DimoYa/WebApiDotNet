using Microsoft.EntityFrameworkCore;
using MyProduct.Data.Models;
using System.Collections.Generic;

namespace MyProduct.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}
