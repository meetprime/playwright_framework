import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SamplePage } from '../pages/samplePage';
import { Browser, chromium } from 'playwright';

let browser: Browser;
let page: SamplePage;

Given('I navigate to {string}', async (url: string) => {
  browser = await chromium.launch();
  const context = await browser.newContext();
  const pageInstance = await context.newPage();
  page = new SamplePage(pageInstance);
  await page.navigateTo(url);
});

Then('the title should be {string}', async (expectedTitle: string) => {
  const title = await page.getTitle();
  expect(title).toBe(expectedTitle);
  await browser.close();
});
