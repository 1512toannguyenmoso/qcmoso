const{expect} = require('@playwright/test');
async function loginFunction(page, url, email, password) {
    await page.goto(url);
    await page.fill('//input[@id="email"]', email);
    await page.fill('//input[@id="password"]', password);
    await page.click('//button[@id="gwt-debug-submit"]');
};
async function loginFailed(page, url, email, password, errorMessage) {
    await page.goto(url);
    await page.fill('//input[@id="email"]', email);
    await page.fill('//input[@id="password"]', password);
    await page.click('//button[@id="gwt-debug-submit"]');
    await expect(page.locator('//p[@id="error"]')).toHaveText(errorMessage);
};
module.exports = {loginFunction, loginFailed};