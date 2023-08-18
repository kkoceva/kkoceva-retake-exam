const { test, expect } = require('@playwright/test');

test('Check home page', async ({ page }) => {
    await page.goto(process.env.DEPLOYED_URL);
    const heading = await page.$('h1');
    const text = await heading.textContent();
    expect(text).toContain('Books Collection');  
  });
  