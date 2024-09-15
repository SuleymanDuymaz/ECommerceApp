    using ECommerceAppAPI.Application.Repositories.Products;
using ECommerceAppAPI.Application.RequestParameters;
using ECommerceAppAPI.Application.ViewModels.Products;
using ECommerceAppAPI.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

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
        public async Task<IActionResult> Get([FromQuery] Pagination pagination)
            {
            await Task.Delay(5000);
            var totalCount=_productReadRepository.GetAll(false).Count();

            var products=_productReadRepository.GetAll(false).Skip(pagination.Page*pagination.Size)
                .Take(pagination.Size).Select(p => new
                {
                    p.Id,
                    p.Name,
                    p.Stock,
                    p.Price,
                    p.CreatedDate
                }).ToList();
            return Ok(new
            {   
                totalCount,
                products
            });
            //return Ok(_productReadRepository.GetAll(false).Select(p=>new
            //{
            //    p.Id,
            //    p.Name,
            //    p.Stock,
            //    p.Price,
            //    p.CreatedDate
            //}));
        }
        //[HttpGet]error
        //public async Task<IActionResult> Get(string id)
        //{
        //    return Ok(_productReadRepository.GetByIdAsync(id,false));
        //}
        [HttpPost]
        public async Task<IActionResult> Post(CreateProductViewModel model)
        {
            if (ModelState.IsValid)
            {
                await _productWriteRepository.AddAsync(new()
                {
                    Name = model.Name,
                    Price = model.Price,
                    Stock = model.Stock,
                });
                await _productWriteRepository.SaveAsync();
                return StatusCode((int)HttpStatusCode.Created);
            }
            return StatusCode((int)HttpStatusCode.BadRequest);

        }
        [HttpPut]
        public async Task<IActionResult> Put(UpdateProductViewModel model)
        {
            Product product = await _productReadRepository.GetByIdAsync(model.Id);
            if (ModelState.IsValid)
            {
                product.Price = model.Price;
                product.Stock = model.Stock;
                product.Name = model.Name;
                await _productWriteRepository.SaveAsync();
            }

         

            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var result=await _productWriteRepository.RemoveAsync(id);
            if (result == true)
            {
                await _productWriteRepository.SaveAsync();
                return Ok();
            }
            return BadRequest();

        }

    }
}
