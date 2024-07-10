import { setTimeout } from 'node:timers/promises'

const locators = {}

class BasicPage {
  constructor({ page }) {
    // this = {}

    this.page = page

    this.headerButton = 'мой локатор'

    BasicPage.common = ''

    // return this
  }

  // this.visit = |
  async visit() {
    await this.page.goto(this.url)
    // 1
    console.log(`BasicPage.goto Open page: ` + this.url)
  }
}

export class AuthPage extends BasicPage {
  url = '/login'
}
export class ArticlePage extends BasicPage {
  #id

  constructor({ page, id }) {
    super({ page })

    this.#id = id
  }

  get url() {
    return `/article/${this.#id}`
  }
}
export class PostPage extends BasicPage {
  constructor({ page, id }) {
    super({ page })

    this.url = `/article/${id}`
  }
}

const page = {
  async goto(url) {
    await setTimeout(10_000)
    console.log('page.goto Open page: ', url)
  },
}
const authPage1 = new AuthPage({ page }) // .constructor // создали this
const authPage2 = new AuthPage({ page }) // .constructor // создали this
const articlePage = new ArticlePage({ page, id: 101 })

await authPage1.visit()
// authPage1.visit() -> this.visit()

await articlePage
  .visit()
  (new AuthPage({ page }) /* this -> */)
  .visit() // this.visit

class UserFixture {
  state = {}

  setUsername(username, uniq = false) {
    this.state.username = username

    if (uniq) {
      this.state.username = username + Math.random() // UUID()
    }

    return this
  }

  setPassword(password) {
    this.state.password = password

    return this
  }

  build() {
    return {}
  }
}

const userFixture = new UserFixture()

userFixture.setUsername('123123').setPassword('123456')

const user1 = userFixture.build()

const user2 = userFixture.setPassword('new password').build()
