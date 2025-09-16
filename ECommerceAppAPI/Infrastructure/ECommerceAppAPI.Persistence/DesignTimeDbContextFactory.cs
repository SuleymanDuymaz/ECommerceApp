using ECommerceAppAPI.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAppAPI.Persistence
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<ECommerceAppAPIDbContext>
    {
        public ECommerceAppAPIDbContext CreateDbContext(string[] args)
        {
            ConfigurationManager configurationManager = new();
            configurationManager.SetBasePath(Path.Combine(Directory.GetCurrentDirectory(),
                "../../Presentation/ECommerceAppAPI.API"));

            configurationManager.AddJsonFile("appsettings.json");

            DbContextOptionsBuilder<ECommerceAppAPIDbContext> dbContextOptionsBuilder = new();
            dbContextOptionsBuilder.UseSqlServer
                ("Server=(localdb)\\MSSQLLocalDB;Database=ECOMMERCE;Trusted_Connection=True;TrustServerCertificate=True;");
            return new(dbContextOptionsBuilder.Options);
        }
    }
}
