import { AuthPage } from './classes.mjs'

const page = {
  async goto (url) {
    console.log('page.goto Open page: ', url)
  }
}
const authPage = new AuthPage({ page })
await authPage.visit()
