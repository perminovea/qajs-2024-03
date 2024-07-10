// @ts-check
import { expect } from '@playwright/test'
import { BasicPage } from './BasicPage'

export class AuthPage extends BasicPage {
  url = '/register'

  constructor({ page }) {
    super({ page })

    this.fieldUsername = page.getByTestId('input-username')
    this.fieldEmail = page.getByTestId('input-email')
    this.fieldPassword = page.getByTestId('input-password')
    this.btnSubmit = page.getByTestId('btn-submit')
  }

  async visit() {
    await super.visit()
    await expect(this.page.locator('h1')).toHaveText('Sign up')
  }

  async fillUsername(username) {
    await this.fieldUsername.fill(username)
  }

  async fillEmail(email) {
    await this.fieldEmail.fill(email)
  }

  async fillPassword(password) {
    await this.fieldPassword.fill(password)
  }

  async submitForm() {
    await this.btnSubmit.click()
  }

  async reg({ username, email, password }) {
    await this.visit()
    await this.fillUsername(username)
    await this.fillEmail(email)
    await this.fillPassword(password)
    await this.submitForm()
  }
}
