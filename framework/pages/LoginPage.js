// @ts-check
import { expect } from '@playwright/test'
import { BasicPage } from './BasicPage'

export class LoginPage extends BasicPage {
  url = '/register'

  async visit() {
    await super.visit()
    await expect(this.page.locator('h1')).toHaveText('Sign in')
  }

  async fillEmail(email) {
    await this.page.getByTestId('input-email').fill(email)
  }

  async fillPassword(password) {
    await this.page.getByTestId('input-password').fill(password)
  }

  async submitForm() {
    await this.page.getByTestId('btn-submit').click()
  }

  async login({ email, password }) {
    await this.visit()
    await this.fillEmail(email)
    await this.fillPassword(password)
    await this.submitForm()
  }
}
