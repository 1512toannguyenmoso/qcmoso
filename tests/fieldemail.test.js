// import {test ,expect } from '@playwright/test';

// test('check field email' , async ({ page }) => {

//     await page.goto('https://www.viet18.com/login');

//     //1. kiem tra field có tồn tại & có thể nhập liệu
//     await expect(page.locator('input[id="email"]')).toBeVisible();
//     await expect(page.locator('input[id="email"]')).toBeEnabled();

//     //2. kiểm tra placeholder của email field
//     await expect(page.locator('input[id="email"]')).toHaveAttribute('placeholder', "Email" );

//     //3. nhập dữ liệu hợp lệ
//     await page.locator('input[id="email"]').fill('test@example.com');
//     await expect(page.locator('input[id="email"]')).toHaveValue('test@example.com');
    
//     //4. kiểm tra dữ liệu không hợp lệ & hiển thị lỗi
//     await page.locator('input[id="email"]').fill('invalid-email');
//     await //page.keyboard.press('tab'); //di chuyển focus để kích hoạt validation
//     await expect(page.locator('.error-message')).toContainText('Invalid email format');
// });

import { test, expect } from '@playwright/test';

let page; // Biến để dùng chung cho tất cả test case

test.describe('Email field validation', () => {

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://www.viet18.com/login'); // Thay bằng trang thực tế
    });

    test.afterAll(async () => {
        await page.close(); // Đóng trang sau khi hoàn tất tất cả test
    });

    test('Should display email field and allow input', async () => {
        const emailField = page.locator('input[id="email"]');
        await expect(emailField).toBeVisible();
        await expect(emailField).toBeEnabled();
    });

    test('Should have correct placeholder', async () => {
        const emailField = page.locator('input[id="email"]');
        await expect(emailField).toHaveAttribute('placeholder', 'Email'); // Thay text nếu cần
    });

    test('Should accept valid email', async () => {
        const emailField = page.locator('input[id="email"]');
        await emailField.fill('test@example.com');
        await expect(emailField).toHaveValue('test@example.com');
    });

    test('Should show error for invalid email format', async () => {
        const emailField = page.locator('input[id="email"]');
        await emailField.fill('invalid-email');
        await page.keyboard.press('Tab'); // Di chuyển focus để kích hoạt validation
        
        const errorMessage = page.locator('.error-message'); // Thay selector nếu cần
        await expect(errorMessage).toContainText('Invalid email format');
    });

    test('Should show error for empty email field', async () => {
        const emailField = page.locator('input[id="email"]');
        await emailField.fill('');
        await page.keyboard.press('Tab');

        const errorMessage = page.locator('.error-message'); // Thay selector nếu cần
        await expect(errorMessage).toContainText('Email is required');
    });

    test('Should match valid email format using regex', async () => {
        const emailField = page.locator('input[id="email"]');
        await emailField.fill('test@domain.com');

        const email = await emailField.inputValue();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        expect(emailRegex.test(email)).toBeTruthy();
    });

});