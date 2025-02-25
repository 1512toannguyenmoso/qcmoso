const{test, expect} = require('@playwright/test');
//import {test, expect} from '@playwright/test';

//Login page
test('Login Home Page',async ({page})=>{
  await page.goto('https://www.viet18.com/login');
  await page.fill('//input[@id="email"]','chauchau.inc@gmail.com');
  await page.fill('//input[@id="password"]','Phuong123456');
  await page.click('//button[@id="gwt-debug-submit"]');
});

