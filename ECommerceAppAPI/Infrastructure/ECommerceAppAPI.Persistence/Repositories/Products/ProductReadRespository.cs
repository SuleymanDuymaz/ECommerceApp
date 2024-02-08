using ECommerceAppAPI.Application.Repositories.Products;
using ECommerceAppAPI.Domain.Entities;
using ECommerceAppAPI.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAppAPI.Persistence.Repositories.Products
{
    public class ProductReadRepository : ReadRepository<Product>,IProductReadRepository
    {
        public ProductReadRepository(ECommerceAppAPIDbContext context) : base(context)
        {
        }
    }
}
