const { test, expect } = require ('@playwright/test');

// danh sach test case: neu serial thi khi run test se chay lan luot tung test case
test.describe.serial('List test cases execute', () => {

    // truoc khi chay moi test case
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.viet18.com');
    });
    
    // login that bai
    test('Go to the page and login unsuccessful', async ({ page }) => {
        await page.click('//button[normalize-space()="Sign in"]');
        await page.fill('//input[@id="email"]', 'chauchau.inc@gmail.com');
        await page.fill('//input[@id="password"]', 'Phuong12345');
        await page.click('//button[@id="gwt-debug-submit"]');
        await expect(page.locator('//p[@id="error"]')).toHaveText('Login failed. Invalid email or password.');
        await page.waitForTimeout(3000);
    });

    // login thanh cong
    test('Go to the page and login successfull', async ({ page }) => {
        await page.click('//button[normalize-space()="Sign in"]');
        await page.fill('//input[@id="email"]', 'chauchau.inc@gmail.com');
        await page.fill('//input[@id="password"]', 'Phuong123456');
        await page.click('//button[@id="gwt-debug-submit"]');
        await expect(page.locator('//span[@id="app-name"]')).toHaveText('Pipeline');
        await page.click('//span[normalize-space()="Users"]');
        await page.click('//a[normalize-space()="Associates"]');
        await page.waitForTimeout(15000);
    });
})
