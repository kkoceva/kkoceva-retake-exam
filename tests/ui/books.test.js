const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    await page.goto(process.env.DEPLOYED_URL +"/books");
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  