const{test, expect} = require('@playwright/test');
//import {test, expect} from '@playwright/test';

test.beforeAll('Navigate to the landing page', async({page})=>{
  await page.goto('https://www.viet18.com');
});
//Login page
test.describe('User Authentication Tests',() =>{
  test('Login Home Page Successfully',async ({page})=>{
    await page.goto('https://www.viet18.com/login');
    await page.fill('//input[@id="email"]','chauchau.inc@gmail.com');
    await page.fill('//input[@id="password"]','Phuong123456');
    await page.click('//button[@id="gwt-debug-submit"]');
    });
  test('Login Home Page Failed', async({page})=>{
    await page.goto('https://www.viet18.com/login');
    await page.fill('//input[@id="email"]','chauchau.inc@gmail.com');
    await page.fill('//input[@id="password"]','Phuong12345');
    await page.click('//button[@id="gwt-debug-submit"]');
    await expect(page.locator('//p[@id="error"]')).toHaveText("Login failed. Invalid email or password.");
  });
  test('Test reset password of non-existing account', async({page})=>{
    await page.goto('https://www.viet18.com/reset_password');
    await page.fill('//input[@id="email"]','noexistingborrower@tesst.com');
    await page.click('//button[@id="gwt-debug-submit"]');
    await expect(page.locator('//p[@id="error"]')).toHaveText("There is no account associated set this email address.");
})
});