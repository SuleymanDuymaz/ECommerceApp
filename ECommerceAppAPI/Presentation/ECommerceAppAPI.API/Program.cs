using ECommerceAppAPI.Application.Validators.Product;
using ECommerceAppAPI.Infrastructure.Filters;
using ECommerceAppAPI.Persistence;
using FluentValidation.AspNetCore;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options=>options.AddDefaultPolicy
(policy=>policy.WithOrigins("http://localhost:4200", "http://localhost:4200").AllowAnyHeader().AllowAnyMethod()));

builder.Services.AddPersistenceServices();
builder.Services.AddControllers(options=>options.Filters.Add<ValidationFilter>())
    .AddFluentValidation(configuration => configuration
.RegisterValidatorsFromAssemblyContaining<CreateProductValidator>())
    .ConfigureApiBehaviorOptions(options => options.SuppressModelStateInvalidFilter = true);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
