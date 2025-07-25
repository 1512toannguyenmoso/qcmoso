import { test, expect } from '@playwright/test';
import { checkAndCaptureWarningPopup } from "../utils/pageHelper.js";

test.describe("List test cases get quote - Non login view", () => {

  test("Get Quote widget with QM Pricing - Comapny website", async ({ page }) => {

    await page.goto("https://www.viet18.com/");
    await page.waitForLoadState("load");
    await checkAndCaptureWarningPopup(page);
    await page.waitForTimeout(8000);
    await page.click("//div[@id='com.mvu.loan.client.quote.SmallQuoteTabPanel']//a[@aria-label='qm']");
    await page.click("//div[@id='com.mvu.loan.client.quote.SmallQuoteForm']//button[@id='gwt-debug-submit']");
    await page.click("//div[@id='com.mvu.loan.client.quote.QuoteFormPopupForHRHP']//span[@id='select2-income_to_ami-container']");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.click("//div[@class='modal-content']//button[@id='gwt-debug-submit']");
    await checkAndCaptureWarningPopup(page);
    await expect(page.locator("//div[@id='com.mvu.loan.client.quote.QuoteResult']//input[@aria-label='Row 1 Compare']")).toBeVisible({ timeout: 12000 });
    await checkAndCaptureWarningPopup(page);
    console.log("QM rate has been shown!");

  });

  test("Get quote widget with Non-QM Pricing - Company website", async ({ page }) => {

    await page.goto("https://www.viet18.com/");
    await page.waitForLoadState("load");
    await checkAndCaptureWarningPopup(page);
    await page.waitForTimeout(8000);
    await page.click("//div[@id='com.mvu.loan.client.quote.SmallQuoteTabPanel']//a[@aria-label='non_qm']");
    await page.waitForTimeout(1000);
    await page.click("//div[@id='com.mvu.loan.client.quote.SmallNonQmQuoteForm']//button[@id='gwt-debug-submit']");
    await checkAndCaptureWarningPopup(page);
    await page.click("//div[@id='com.mvu.loan.client.quote.NonQMQuoteForm']//button[normalize-space()='More Details']");
    await page.click("//div[@id='com.mvu.loan.client.quote.NonQMQuoteForm']//span[@id='select2-compensation_type-container']");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(500);
    await page.click("//div[@id='com.mvu.loan.client.quote.NonQMQuoteForm']//button[@id='gwt-debug-submit']");
    await checkAndCaptureWarningPopup(page);
    await expect(page.locator("//div[@id='com.mvu.loan.client.quote.NonQMQuoteResult']//div[@class='table-row thead']")).toBeVisible({ timeout: 12000 });
    await checkAndCaptureWarningPopup(page);
    console.log("Non-QM rate has been shown!");

  });

  test("Get Quote widget with QM Pricing - Loan Officer's page", async ({ page }) => {

    await page.goto("https://www.viet18.com/mindiebachdontchangeemail/");
    await page.waitForLoadState("load");
    await checkAndCaptureWarningPopup(page);
    await page.waitForTimeout(8000);
    await page.click("//div[@id='com.mvu.loan.client.quote.SmallQuoteTabPanel']//a[@aria-label='qm']");
    await page.click("//div[@id='com.mvu.loan.client.quote.SmallQuoteForm']//button[@id='gwt-debug-submit']");
    await page.click("//div[@id='com.mvu.loan.client.quote.QuoteFormPopupForHRHP']//span[@id='select2-income_to_ami-container']");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.click("//div[@class='modal-content']//button[@id='gwt-debug-submit']");
    await checkAndCaptureWarningPopup(page);
    await expect(page.locator("//div[@id='com.mvu.loan.client.quote.QuoteResult']//input[@aria-label='Row 1 Compare']")).toBeVisible({ timeout: 12000 });
    await checkAndCaptureWarningPopup(page);
    console.log("QM rate has been shown!");

  });

  test("Get quote widget with Non-QM Pricing - Loan Officer's page", async ({ page }) => {

    await page.goto("https://www.viet18.com/mindiebachdontchangeemail/");
    await page.waitForLoadState("load");
    await checkAndCaptureWarningPopup(page);
    await page.waitForTimeout(8000);
    await page.click("//div[@id='com.mvu.loan.client.quote.SmallQuoteTabPanel']//a[@aria-label='non_qm']");
    await page.waitForTimeout(1000);
    await page.click("//div[@id='com.mvu.loan.client.quote.SmallNonQmQuoteForm']//button[@id='gwt-debug-submit']");
    await checkAndCaptureWarningPopup(page);
    await page.click("//div[@id='com.mvu.loan.client.quote.NonQMQuoteForm']//button[normalize-space()='More Details']");
    await page.click("//div[@id='com.mvu.loan.client.quote.NonQMQuoteForm']//span[@id='select2-compensation_type-container']");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(500);
    await page.click("//div[@id='com.mvu.loan.client.quote.NonQMQuoteForm']//button[@id='gwt-debug-submit']");
    await checkAndCaptureWarningPopup(page);
    await expect(page.locator("//div[@id='com.mvu.loan.client.quote.NonQMQuoteResult']//div[@class='table-row thead']")).toBeVisible({ timeout: 12000 });
    await checkAndCaptureWarningPopup(page);
    console.log("Non-QM rate has been shown!");
    
  });

});