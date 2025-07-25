import { test, expect } from "@playwright/test";
import { generateRandomEmail } from "../utils/emailGenerator.js";
import { checkForErrorPage, checkAndCaptureWarningPopup } from "../utils/pageHelper.js";

const email = generateRandomEmail();
const password = "zxczxc";
const otp_code = "";

test.describe("Register Borrower account flow", () => {

    test("Create a Borrower account on company website", async ({ page }) => {

        await page.goto("https://www.viet18.com/");
        await page.waitForLoadState('load');
        await Promise.all([checkForErrorPage(page), checkAndCaptureWarningPopup(page)]);
        await page.click("//header[@id='header']//a[normalize-space()='Loan Application']");
        await page.waitForLoadState('load');
        await Promise.all([checkForErrorPage(page), checkAndCaptureWarningPopup(page)]);
        await page.click("//div[@id='com.mvu.loan.client.view.application.borrower.PurposeForm']//button[@id='buy-a-home']");
        await page.click("//div[@id='com.mvu.loan.client.view.application.borrower.PurposeForm$PurposeSelectForm']//button[@id='seller-accepted-my-offer']");
        await page.locator("//input[@id='email']").pressSequentially(email, { delay: 50 });
        await page.click("//div[@id='com.mvu.loan.client.view.application.borrower.register.BorrowerRegisterOrLoginForm$EmailForm']//button[@id='gwt-debug-submit']");
        await checkAndCaptureWarningPopup(page);
        await page.locator("//input[@id='password']").pressSequentially(password, { delay: 50 });
        await page.click("//div[@id='com.mvu.loan.client.view.application.borrower.register.BorrowerRegisterOrLoginForm$RegisterForm']//button[@id='gwt-debug-next']");
        await checkAndCaptureWarningPopup(page);

        // còn 1 bước nhập verification code và click button Verify để tạo new account

        // await page.locator("//input[@id='otp_code']").pressSequentially(otp_code, { delay: 50 });
        // await page.click("//div[@id='com.mvu.loan.client.view.application.borrower.register.OTPForm']//button[@id='gwt-debug-submit']");
        // await expect(page.locator("//div[@id='header']//li[@id='a__user']")).toBeVisible({ timeout: 1000 });

        await page.waitForTimeout(3000);

    });

    // https://www.viet18.com/mindiebachdontchangeemail/apply

});