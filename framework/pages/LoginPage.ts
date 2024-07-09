// @ts-check
import { expect } from '@playwright/test'
import { BasicPage } from './BasicPage'

type userCredentials = {
  email: string,
  password: string
}

export class LoginPage extends BasicPage {
  url = '/register'

  async visit () {
    await super.visit()
    await expect(this.page.locator('h1')).toHaveText('Sign in')
  }

  async fillEmail (email: string) {
    await this.page.getByTestId('input-email').fill(email)
  }

  async fillPassword (password: string) {
    await this.page.getByTestId('input-password').fill(password)
  }

  async submitForm () {
    await this.page.getByTestId('btn-submit').click()
  }

  async login ({ email, password } : userCredentials){
    await this.visit()
    await this.fillEmail(email)
    await this.fillPassword(password)
    await this.submitForm()
  }
}
