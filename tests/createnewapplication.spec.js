import { test, expect } from '@playwright/test';
import myfunctions, { TickTheCheckBox } from './function.js';

test('Create new application use autofill', async ({ page }) => {
    test.setTimeout(240000);
    await page.goto('https://www.viet18.com/');
    await page.waitForLoadState('load');

    // Login into system
    await page.click('//button[normalize-space()="Sign in"]');
    await page.waitForLoadState('load');
    await page.type('//input[@id="email"]', 'suspension1@viet18.com', { delay: 100 });
    await page.type('//input[@id="password"]', 'zxczxc', { delay: 100 });
    await page.click('//button[@id="gwt-debug-submit"]');
    await page.waitForLoadState('load');

    // Navigate to Prospects page
    await page.click('//li[@class="d-none d-md-block"]//a[@href="##prospects"][normalize-space()="Prospects"]');
    await page.waitForLoadState('load');

    // Add application
    await page.click('//button[@id="gwt-debug-add"]');
    await page.click('//button[@id="input-new-prospect"]');
    await page.click('//button[@id="skip-and-fill-application-manually"]');

    // Use autofill proceed application
    // General tab
    await page.click('//a[@id="gwt-debug-__floating_fill-form"]//i[@class="material-icons unset-icons"][normalize-space()="check"]');
    await page.click('//button[@id="gwt-debug-next"]');

    // Loan info tab
    await page.click('//span[@id="select2-purpose-container"]');
    await page.fill('//span[@class="select2-search select2-search--dropdown"]//input[@role="textbox"]', 'Purchase');
    await page.keyboard.press('Enter');
    await page.click('//a[@id="gwt-debug-__floating_fill-form"]//i[@class="material-icons unset-icons"][normalize-space()="check"]');
    await page.click('//button[@id="gwt-debug-next"]');

    // Contact info tab
    await page.click('//a[@id="gwt-debug-__floating_fill-form"]//i[@class="material-icons unset-icons"][normalize-space()="check"]');
    await page.click('//button[@id="gwt-debug-next"]');

    // Borrowers tab
    await page.click('//div[@id="com.mvu.loan.client.view.application.form1003.BorrowersForm"]//div[4]//div[2]//div[1]//div[9]//div[1]//table[1]//thead[1]//tr[1]//th[1]//button[1]');
    await page.click('//a[@id="gwt-debug-__floating_fill-form"]//i[@class="material-icons unset-icons"][normalize-space()="check"]');
    await page.click('//div[@class="modal-footer cleafix flex-wrap"]//button[@id="gwt-debug-submit"]');
    await page.click('//button[@id="gwt-debug-next"]');

    // Employment tab
    await page.click('//div[@id="employments"]//table[@class="table table-sm"]//thead//tr//th//button[@id="i-classmaterial-icons-unset-iconsaddcirclei-add"]');
    await page.dblclick('//a[@id="gwt-debug-__floating_fill-form"]//i[@class="material-icons unset-icons"][normalize-space()="check"]');
    await page.click('//div[@class="modal-footer cleafix flex-wrap"]//button[@id="gwt-debug-submit"]')
    await page.click('//button[@id="gwt-debug-next"]');

    // Assets tab
    await page.click('//div[@id="assets"]//table[@class="table table-sm"]//thead//tr//th//button[@id="i-classmaterial-icons-unset-iconsaddcirclei-add"]');
    await page.click('//a[@id="gwt-debug-__floating_fill-form"]//i[@class="material-icons unset-icons"][normalize-space()="check"]');
    await page.click('//div[@class="modal-footer cleafix flex-wrap"]//button[@id="gwt-debug-submit"]');
    await page.click('//button[@id="gwt-debug-next"]');

    // REO tab
    await page.click('//button[@id="gwt-debug-next"]');

    // Liabilities tab
    await page.click('//button[@id="gwt-debug-next"]');

    // Housing expenses tab
    await page.click('//button[@id="gwt-debug-next"]');
    await page.click('//button[@id="gwt-debug-next"]');

    // Transaction details tab
    await page.click('//button[@id="gwt-debug-next"]');

    // Declarations tab
    await page.click('//button[@id="gwt-debug-next"]');
    

    // Demographic tab
    let list = await myfunctions.getCheckboxesFromDiv(await myfunctions.getHtml(page), "com.mvu.loan.client.view.application.DemographicInfoForm");
    console.log(list)
    console.log(myfunctions.tickTheCheckBox(list))
 
    //await page.waitForTimeout(12000);
});

