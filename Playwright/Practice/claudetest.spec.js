const { test, expect } = require('@playwright/test');

test('Navigate through Viet18 loan application process', async ({ page }) => {
  await page.goto('https://www.viet18.com/apply');
  await page.waitForLoadState('networkidle');
  await page.click('button:has-text("I want to BUY A HOME")');
  await page.waitForLoadState('networkidle');
  await page.click('button:has-text("Seller accepted my offer")');
  await page.waitForLoadState('networkidle');
  console.log('Test completed successfully');
});