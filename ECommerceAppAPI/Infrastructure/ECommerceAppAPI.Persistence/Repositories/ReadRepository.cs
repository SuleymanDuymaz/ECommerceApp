using ECommerceAppAPI.Application.Repositories;
using ECommerceAppAPI.Domain.Entities.Common;
using ECommerceAppAPI.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAppAPI.Persistence.Repositories
{
    
    public class ReadRepository<T> : IReadRepository<T> where T : BaseEntity
    {
        private readonly ECommerceAppAPIDbContext _context;
        public ReadRepository(ECommerceAppAPIDbContext context)
        {
            _context = context;
        }


        public DbSet<T> Table => _context.Set<T>();

        public IQueryable<T> GetAll(bool tracking = true)
        //=> Table; before tracking mechanism
        {
            var query=Table.AsQueryable();
            if (!tracking)
            {
                query = query.AsNoTracking();
            }
            return query;
        }

        public async Task<T> GetByIdAsync(string id, bool tracking = true)
        //=> Table.FirstOrDefaultAsync(data=>data.Id==Guid.Parse(id));
        //=> await Table.FindAsync(Guid.Parse(id));before tracking mechanism
        {
            var query = Table.AsQueryable();
            if (!tracking)
            {
                query = query.AsNoTracking();
            }
            return await query.FirstOrDefaultAsync(p=>p.Id==Guid.Parse(id));
        }
        public async Task<T> GetSingleAsync(Expression<Func<T, bool>> method, bool tracking = true)
        //=>await Table.FirstOrDefaultAsync(method); before tracking mechanism
        {
            var query=Table.AsQueryable();
            if (!tracking)
            {
                query = query.AsNoTracking();
            }
            return await query.FirstOrDefaultAsync(method);
        }

        public IQueryable<T> GetWhere(Expression<Func<T, bool>> method, bool tracking = true)
        //=>Table.Where(method); before tracking mechanism
        {
            var query = Table.Where(method).AsQueryable();
            if (!tracking)
            {
                query = query.AsNoTracking();
            }
            return query;
        }
    }
}
