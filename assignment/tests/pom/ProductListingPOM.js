class ProductListingPage {
  constructor(page) {
    this.page = page;
    this.firstProduct = '.product-item';
    this.addToCartButton = 'text=Add to cart';
    this.cartCount = '#cart-count';
  }

  async gotoMensWear() {
    await this.page.goto('https://shop.qaautomationlabs.com/mens-wear.php');
  }

  async addFirstProductToCart() {
    const product = this.page.locator(this.firstProduct).first();
    await product.locator(this.addToCartButton).click();
  }

  async getCartCount() {
    return await this.page.locator(this.cartCount).innerText();
  }
}


module.exports = { ProductListingPage };