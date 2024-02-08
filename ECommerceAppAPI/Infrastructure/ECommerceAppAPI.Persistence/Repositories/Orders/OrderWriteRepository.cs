using ECommerceAppAPI.Application.Repositories.Orders;
using ECommerceAppAPI.Domain.Entities;
using ECommerceAppAPI.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAppAPI.Persistence.Repositories.Orders
{
    public class OrderWriteRepository : WriteRepository<Order>, IOrderWriteRespository
    {
        public OrderWriteRepository(ECommerceAppAPIDbContext context) : base(context)
        {
        }
    }
}
