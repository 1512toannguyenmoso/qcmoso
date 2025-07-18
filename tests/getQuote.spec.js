import { test, expect } from '@playwright/test';

test('Get Quote widget with QM Pricing - Comapny Website', async ({ page }) => {
    await page.goto("https://www.viet18.com/");
    await page.waitForLoadState('load');
    await page.waitForTimeout(8000);
    await page.click("//a[normalize-space()='FULL DOC']");
    await page.click("(//button[normalize-space()='Get Quote'])[1]");
    await page.click("span#select2-income_to_ami-container");
    await page.keyboard.press("Enter");
    await page.click("//div[@class='modal-footer cleafix flex-wrap']//button[@id='gwt-debug-submit']");
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'load' }),
      ]);
    await expect(page.locator("//div[contains(@class,'clearfix')]//div//div[contains(@class,'active')]")).not.toHaveText("");
});