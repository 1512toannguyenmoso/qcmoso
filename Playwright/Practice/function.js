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

function generateRandomEmail(){
    const char = "abcdefghijklmnopqrstuvwxyz0123456789";
    const domainNames = ["test.com","testing.com","abctest.com","xyztest.com","noexistingtest.com"];
    function getRandomString(length){
        let result = "";
        for (let i=0;i < length; i++){
            result += char.charAt(Math.floor(Math.random()*char.length));
        }
        return result; 
    }
    const username = getRandomString(8);
    const domain = domainNames[Math.floor(Math.random() * domainNames.length)];
    return `${username}@${domain}`;
};
module.exports = {loginFunction, loginFailed, generateRandomEmail};