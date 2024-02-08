using ECommerceAppAPI.Application.Repositories.Customers;
using ECommerceAppAPI.Application.Repositories.Orders;
using ECommerceAppAPI.Application.Repositories.Products;
using ECommerceAppAPI.Persistence.Context;
using ECommerceAppAPI.Persistence.Repositories.Cusstomers;
using ECommerceAppAPI.Persistence.Repositories.Orders;
using ECommerceAppAPI.Persistence.Repositories.Products;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ECommerceAppAPI.Persistence
{
    public static class ServiceRegistration
    {
        public static void AddPersistenceServices(this IServiceCollection services)
        {
            services.AddDbContext<ECommerceAppAPIDbContext>(options => options.UseSqlServer(Configuration.ConnectionString)
            ,ServiceLifetime.Singleton);
            //scoped olunca controller da task kullanılırsa hata  veriyor. Bunun nedeni ve scoped ile singleton farkı.
            services.AddScoped<ICustomerReadRepository, CustomerReadRepository>();
            services.AddScoped<ICustomerWriteRepository, CustomerWriteRepository>();
            services.AddScoped<IOrderReadRepository, OrderReadRepository>();
            services.AddScoped<ICustomerWriteRepository, CustomerWriteRepository>();
            services.AddScoped<IProductReadRepository, ProductReadRepository>();
            //services.AddSingleton<IProductWriteRepository, ProductWriteRepository>();
            services.AddScoped<IProductWriteRepository, ProductWriteRepository>();




        }
    }
}
