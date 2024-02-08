using ECommerceAppAPI.Application.Repositories.Customers;
using ECommerceAppAPI.Domain.Entities;
using ECommerceAppAPI.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAppAPI.Persistence.Repositories.Cusstomers
{
    public class CustomerWriteRepository : WriteRepository<Customer>,ICustomerWriteRepository
    {
        public CustomerWriteRepository(ECommerceAppAPIDbContext context) : base(context)
        {
        }
    }
}
