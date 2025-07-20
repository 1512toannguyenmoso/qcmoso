import { test, expect } from '@playwright/test';

test.describe.serial("List test cases get quote - Non-login", () => {

  test("Get Quote widget with QM Pricing - Comapny website", async ({ page }) => {
    await page.goto("https://www.viet18.com/");
    await page.waitForLoadState("load");
    await page.waitForTimeout(5000);
    await page.click("//a[normalize-space()='FULL DOC']");
    await page.click("(//button[normalize-space()='Get Quote'])[1]");
    await page.click("span#select2-income_to_ami-container");
    await page.keyboard.press("Enter");
    await Promise.all([
      page.waitForNavigation({ waitUntil: "load" }),
      page.click("//div[@class='modal-footer cleafix flex-wrap']//button[@id='gwt-debug-submit']"),
    ]);
    await page.waitForTimeout(8000);
    await expect(page.locator("//input[@aria-label='Row 1 Compare']")).toBeVisible();
  });

  test("Get quote widget with Non-QM Pricing - Company website", async ({ page }) => {
    await page.goto("https://www.viet18.com/");
    await page.waitForLoadState("load");
    await page.waitForTimeout(5000);
    
  });

});