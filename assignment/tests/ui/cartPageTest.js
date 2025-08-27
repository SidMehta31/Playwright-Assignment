const { test, expect } = require('@playwright/test')
const { MensWearPage } = require('../../pages/productListingPOM')
const { LoginPage } = require('../../pages/LoginPagePOM')
const { saveData } = require('../../utils/fileHelper')

test('Add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const mensWearPage = new MensWearPage(page)

  await loginPage.gotoLogin()
  await loginPage.login('demo@demo.com', 'demo')
  await mensWearPage.gotoMensWear()
  await mensWearPage.addFirstProductToCart()

  const cartCount = await mensWearPage.getCartCount()
  expect(cartCount).toMatch(/1/)

  // Save cart info
  saveData('cart-output.json', { cartCount })
});