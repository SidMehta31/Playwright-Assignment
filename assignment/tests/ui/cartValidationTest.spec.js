const { test, expect } = require('@playwright/test');
const { CartPage } = require('../../pom/CartPagePOM');
const { LoginPage } = require('../../pom/LoginPagePOM');
const { readData } = require('../../utils/fileHelper');

test('Validate items in cart using previous test outcome', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  const cartData = readData('cart-output.json');
  await loginPage.gotoLogin();
  await loginPage.login('demo@demo.com', 'demo');
  await cartPage.gotoCart();

  const count = await cartPage.getCartItemsCount();
  expect(count).toBe(parseInt(cartData.cartCount));
});