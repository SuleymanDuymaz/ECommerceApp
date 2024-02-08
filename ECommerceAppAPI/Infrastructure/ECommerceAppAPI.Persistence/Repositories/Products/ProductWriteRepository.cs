using ECommerceAppAPI.Application.Repositories;
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
    public class ProductWriteRepository : WriteRepository<Product>,IProductWriteRepository
    {
        public ProductWriteRepository(ECommerceAppAPIDbContext context) : base(context)
        {
        }
    }
}
