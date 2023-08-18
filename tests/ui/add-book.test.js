const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    await page.goto(process.env.DEPLOYED_URL + "/add-book");
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  