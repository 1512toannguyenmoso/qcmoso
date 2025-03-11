import { test, expect } from '@playwright/test';

test('create the lead', async ({ page }) => {
    test.setTimeout(60000);
    // Login page
    await page.goto('https://www.viet18.com/login');
    //await page.getByRole('button', { name: 'Sign in' }).click();
    await page.fill('//input[@id="email"]', 'chauchau.inc@gmail.com');
    await page.fill('//input[@id="password"]', 'Phuong123456');
    await page.waitForTimeout(3000);
    await page.click('//button[@id="gwt-debug-submit"]');

    // Điều hướng đến trang Leads và tạo Lead mới
    await page.waitForTimeout(5000);
    //await page.locator('a[href="##leads"]').click();
    //await page.goto('https://www.viet18.com');
    await page.goto('https://www.viet18.com/leads');
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'add lead' }).click();
    await page.waitForTimeout(3000);
    test.setTimeout(60000);
    // Nhập thông tin Lead
    await page.waitForTimeout(1000);
    await page.locator('input[name="first_name"]').click();
    await page.waitForTimeout(1000);
    await page.locator('input[name="first_name"]').fill('manh');
    await page.waitForTimeout(1000);
    await page.locator('input[name="last_name"]').click();
    await page.waitForTimeout(1000);
    await page.locator('input[name="last_name"]').fill('Auto');
    await page.waitForTimeout(1000);
    await page.locator('input[name="email"]').click();
    await page.waitForTimeout(1000);
    await page.locator('input[name="email"]').fill('test1900@test.com');
    await page.waitForTimeout(1000);
    await page.locator('#select2-referrer_linked_media-container').click(); // Mở dropdown
    await page.waitForSelector('.select2-results__option', { state: 'visible' }); // Chờ danh sách hiện
    await page.getByRole('treeitem', { name: 'FB lead' }).click();
    await page.waitForTimeout(1000);
    await page.click('#select2-loan_type-container');
    await page.waitForTimeout(1000);
    await page.getByRole('treeitem', { name: 'Conventional' }).click();
    await page.waitForTimeout(1000);
    await page.getByText('×30-Yr Fixed').click();
    await page.waitForTimeout(1000);
    await page.getByRole('treeitem', { name: '30-Yr Fixed' }).click();
    await page.waitForTimeout(1000);
    await page.locator('textarea[name="lender_reason"]').click();
    test.setTimeout(60000);
    await page.waitForTimeout(1000);
    await page.locator('textarea[name="lender_reason"]').fill('test automation create the lead');
    await page.waitForTimeout(1000);
    await page.locator('input[name="additional_lo"]').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'check Submit' }).click();

});