using ECommerceAppAPI.Application.ViewModels.Products;
using FluentValidation;


namespace ECommerceAppAPI.Application.Validators.Product
{
    public class CreateProductValidator:AbstractValidator<CreateProductViewModel>
    {
        public CreateProductValidator()
        {
            RuleFor(p => p.Name).NotEmpty().NotNull().WithMessage("Lütfen ürün adını boş geçmeyin")
                .MaximumLength(255).MinimumLength(1).WithMessage("Ürün adı 2 ile 255 karakter arasında olmalıdır.");

            RuleFor(s => s.Stock).NotNull().NotEmpty().WithMessage("Lütfen Stock bilgisi giriniz").Must(s => s >= 0)
                .WithMessage("Stok bilgisi negatif olamaz");

            RuleFor(p => p.Price).NotEmpty().NotNull().WithMessage("Lütfen fiyat bilgisini boş geçmeyin").Must(s => s >= 0)
                .WithMessage("Fiyat bilgisi negatif olamaz");
        }

    }
}
