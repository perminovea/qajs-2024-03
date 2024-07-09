export class BasicPage {
  // @ts-ignore
  constructor({ page }) {
    this.page = page;
  }

  async visit () {
    await this.page.goto(this.url)
  }
}
