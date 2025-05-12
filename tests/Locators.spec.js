//const {test, expect} = require ('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locators', async ({page}) => {

    await page.goto("https://www.demoblaze.com/");

    //action click vào nút login
    //await page.locator('id=login2').click();
    await page.click('id=login2')

    //username -css
    //await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername','pavanol')
    //await page.type('#loginusername','pavanol')

    //pw -css
    await page.fill("input[id='loginpassword']",'test@123')

    //nhấp vào nút login
    await page.click("//button[normalize-space()='Log in']")


})