import { test, expect } from "@playwright/test";
import { checkForErrorPage } from '../utils/pageHelper.js';

test.describe("Make sure all link on the company homepage work", () => {

    test.beforeEach( async ({ page }) => {
        await page.goto('https://www.viet18.com/');
        await page.waitForLoadState('load');
    });

    test("Access Loan Application page", async ({ page }) => {

        await page.click("//a[normalize-space()='Loan Application']");
        await page.waitForLoadState('load');
        await checkForErrorPage(page);

    });

    test("", async ({ page }) => {

    });

});