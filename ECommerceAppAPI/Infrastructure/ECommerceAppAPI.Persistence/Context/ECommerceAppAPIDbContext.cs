using ECommerceAppAPI.Domain.Entities;
using ECommerceAppAPI.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAppAPI.Persistence.Context
{
    public class ECommerceAppAPIDbContext : DbContext
    {
        public ECommerceAppAPIDbContext(DbContextOptions options):base(options)
        {
        }
        public DbSet<Product> Products { get; set;}
        public DbSet<Order> Orders { get; set;}
        public DbSet<Customer> Customers { get; set;}
        //Interceptor
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            //ChangeTracker //Entityler üzerinde güncelleme ya da ekleme işleminde verinin
            //yakalanmasını sağlayan prop. Track edilen verileri yakalayıp elde etmemizi sağlar.
            var datas = ChangeTracker.Entries<BaseEntity>();
            foreach (var data in datas)
            {
                 _ = data.State switch
                {
                    EntityState.Added=>data.Entity.CreatedDate=DateTime.Now,
                    EntityState.Modified=>data.Entity.UpdatedDate=DateTime.Now,
                    _ =>DateTime.UtcNow
                };
            }
            return base.SaveChangesAsync(cancellationToken);




        }
    }
}
