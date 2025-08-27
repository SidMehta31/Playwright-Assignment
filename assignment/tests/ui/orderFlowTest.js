const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../../pages/LoginPage')
const { MensWearPage } = require('../../pages/MensWearPage')
const { CartPage } = require('../../pages/CartPage')

test('Full order flow till checkout button', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const mensWearPage = new MensWearPage(page)
  const cartPage = new CartPage(page)

  await loginPage.gotoLogin()
  await loginPage.login('demo@demo.com', 'demo')
  await mensWearPage.gotoMensWear()
  await mensWearPage.addFirstProductToCart()
  await cartPage.gotoCart()
  await cartPage.proceedToCheckout()

  await expect(page).toHaveURL(/checkout/)
})