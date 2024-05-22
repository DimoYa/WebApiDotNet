
using Microsoft.EntityFrameworkCore;
using MyProduct.Data;
using MyProduct.Data.Models;
using System;

namespace MyProduct.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseInMemoryDatabase("InMemoryDb"));

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Seed data
            using (var scope = app.Services.CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
                context.Database.EnsureCreated();

                if (!context.Products.Any())
                {
                    context.Products.AddRange(
                        new Product { Id = 1, Name = "Product1", Price = 10.0m },
                        new Product { Id = 2, Name = "Product2", Price = 20.0m },
                        new Product { Id = 3, Name = "Product3", Price = 30.0m }
                    );
                    context.SaveChanges();
                }
            }

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}