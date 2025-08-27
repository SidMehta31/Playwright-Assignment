const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../../POM/LoginPagePOM')
const { saveData } = require('../../utils/fileHelper')

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.gotoLogin()
  await loginPage.login('demo@demo.com', 'demo')

  await expect(page).toHaveURL(/index.php/)

  // Save outcome
  saveData('login-output.json', { status: 'Login Successful' });
})