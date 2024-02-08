using ECommerceAppAPI.Application.Repositories.Products;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceAppAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        readonly private IProductReadRepository _productReadRepository;
        readonly private IProductWriteRepository _productWriteRepository;
        public ProductController(IProductReadRepository productReadRepository,
            IProductWriteRepository productWriteRepository)
        {
            _productReadRepository = productReadRepository;
            _productWriteRepository = productWriteRepository;
        }
        [HttpGet]
        public async Task Get()
        {
            //await _productWriteRepository.AddRangeAsync(new()
            //{
            //    new(){Id=Guid.NewGuid(),Name="Product 1",Price=100,Stock=10},
            //    new(){Id=Guid.NewGuid(),Name="Product 2",Price=200,Stock=20},
            //    new(){Id=Guid.NewGuid(),Name="Product 3",Price=300,Stock=30},
            //});
            //await _productWriteRepository.SaveAsync();

            var data = await _productReadRepository.GetByIdAsync("5925da87-450b-4d8c-b230-df6d9262ad2f", true);
            data.Name = "Beni sev";
            await _productWriteRepository.SaveAsync();
        }

    }
}
