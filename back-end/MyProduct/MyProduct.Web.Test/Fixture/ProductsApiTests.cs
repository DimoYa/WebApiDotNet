using MyProduct.Data.DTO;
using MyProduct.Data.Models;
using System.Net.Http.Json;
using System.Net;

namespace MyProduct.Web.Test.Fixture
{
    public class ProductsApiTests : IClassFixture<BaseTests>
    {
        private readonly HttpClient _client;

        public ProductsApiTests(BaseTests factory)
        {
            this._client = factory.GetClient();
        }

        [Fact]
        public async Task GetProducts_ReturnsProductsList()
        {
            // Act
            var products = await _client.GetFromJsonAsync<List<Product>>("/api/products");

            // Assert
            Assert.NotNull(products);
            Assert.NotEmpty(products);
        }

        [Fact]
        public async Task GetProduct_ReturnsProduct()
        {
            // Arrange
            int productId = 2;

            // Act
            var product = await _client.GetFromJsonAsync<Product>($"/api/products/{productId}");

            // Assert
            Assert.NotNull(product);
            Assert.Equal(productId, product.Id);
        }

        [Fact]
        public async Task PostProduct_CreatesProduct()
        {
            // Arrange
            var productDto = new ProductDto
            {
                Name = "TestProduct",
                Price = 100.0m
            };

            // Act
            var response = await _client.PostAsJsonAsync("/api/products", productDto);
            response.EnsureSuccessStatusCode();

            var product = await response.Content.ReadFromJsonAsync<Product>();

            // Assert
            Assert.NotNull(product);
            Assert.Equal("TestProduct", product.Name);
        }

        [Fact]
        public async Task PutProduct_UpdatesProduct()
        {
            // Arrange
            int productId = 3;
            var productDto = new Product
            {
                Id = productId,
                Name = "UpdatedProduct",
                Price = 200.0m
            };

            // Act
            var response = await _client.PutAsJsonAsync("/api/products", productDto);
            response.EnsureSuccessStatusCode();

            var updatedProduct = await _client.GetFromJsonAsync<Product>($"/api/products/{productId}");

            // Assert
            Assert.NotNull(updatedProduct);
            Assert.Equal("UpdatedProduct", updatedProduct.Name);
            Assert.Equal(200.0m, updatedProduct.Price);
        }

        [Fact]
        public async Task DeleteProduct_DeletesProduct()
        {
            // Arrange
            int productId = 1;

            // Act
            var response = await _client.DeleteAsync($"/api/products/{productId}");

            // Assert
            response.EnsureSuccessStatusCode();

            // Verify the deletion
            var getResponse = await _client.GetAsync($"/api/products/{productId}");
            Assert.Equal(HttpStatusCode.NotFound, getResponse.StatusCode);
        }
    }
}
