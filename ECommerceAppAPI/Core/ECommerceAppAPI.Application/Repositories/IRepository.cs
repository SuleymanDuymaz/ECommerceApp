using ECommerceAppAPI.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAppAPI.Application.Repositories
{

    //bu yapı ile solid için yapıldı. command ve query operasyonları ayrıldı.
    public interface IRepository<T> where T : BaseEntity
    {
        DbSet<T> Table {  get; }
    }
}
