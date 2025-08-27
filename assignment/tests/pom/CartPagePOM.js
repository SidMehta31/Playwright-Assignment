class CartPage {
  constructor(page) {
    this.page = page
    this.cartItems = '.cart-item'
    this.checkoutButton = 'text=Checkout'
  }

  async gotoCart() {
    await this.page.loator('#cartdesk').click()
  }

  async getCartItemsCount() {
    return await this.page.locator(this.cartItems).count()
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton)
  }
}
module.exports = { CartPage }