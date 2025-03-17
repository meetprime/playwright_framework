import { Page } from 'playwright';

export class SamplePage {
  constructor(private page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getTitle() {
    return this.page.title();
  }
}
