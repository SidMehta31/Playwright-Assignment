class LoginPage {
  constructor(page) {
    this.page = page
    this.emailInput = 'input[name="email"]'
    this.passwordInput = 'input[name="password"]'
    this.loginButton = 'button:has-text("Login")'
  }

  async gotoLogin() {
    await this.page.goto('https://shop.qaautomationlabs.com')
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password)
    await this.page.click(this.loginButton)
  }
}

module.exports = { LoginPage }
