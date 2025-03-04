const{test, expect} = require('@playwright/test');
//import {test, expect} from '@playwright/test';
const myFunctions = require('./function')

test.beforeAll('Navigate to the landing page', async({page})=>{
  await page.goto('https://www.viet18.com');
});
//User authentication, User is admin.
test.describe('User Authentication Tests, User is admin',() =>{
  test('Login Home Page Successfully',async ({page})=>{
    await myFunctions.loginFunction(page, 'https://www.viet18.com/login', 'chauchau.inc@gmail.com', '123456');
  });
  test('Login Home Page Failed', async({page})=>{
    await myFunctions.loginFailed(page, 'https://www.viet18.com/login', 'chauchau.inc@gmail.com', '123455', 'Login failed. Invalid email or password.');
  });
  test('Test reset password of non-existing account', async({page})=>{
    await page.goto('https://www.viet18.com/reset_password');
    await page.fill('//input[@id="email"]','noexistingborrower@tesst.com');
    await page.click('//button[@id="gwt-debug-submit"]');
    await expect(page.locator('//p[@id="error"]')).toHaveText("There is no account associated set this email address.");
})
});
//user authentication, user is borrower.
test.describe('User Authentication Tests, User is borrower',() => {
  test('Register user', async({page})=>{
    await page.goto('https://www.viet18.com/apply');
    await page.click("//p[normalize-space()='I want to BUY A HOME']");
    await page.click("//p[normalize-space()='Seller accepted my offer']");
    await page.fill("//input[@id='email']",myFunctions.generateRandomEmail());
    await page.click("//button[@id='gwt-debug-next']");
    await page.fill("//input[@id='password']",'123456');
    await page.click("//button[3]");
  })
  test('Login Home Page Successfully',async ({page})=>{
    await myFunctions.loginFunction(page, 'https://www.viet18.com/login', 'userisborrower@testing.com', '123456');
  });
  test('Login Home Page Failed', async ({page}) => {
    await myFunctions.loginFailed(page, 'https://www.viet18.com/login', 'userisborrower@testing.com', '123455', "Login failed. Invalid email or password.");
  });
});
//user authentication, user is lender user.
test.describe('User Authentication Tests, User is lender user',()=>{
  test('Login Home Page Successfully',async ({page})=>{
    await myFunctions.loginFunction(page, 'https://www.viet18.com/login', 'userislenderuser@test.com', '123456');
  });
  test('Login Home Page Failed', async ({page}) => {
    await myFunctions.loginFailed(page, 'https://www.viet18.com/login', 'userislenderuser@test.com', '123455', "Login failed. Invalid email or password.");
  });
});
//user authentication, user is vendor user.
test.describe('User Authentication Tests, User is vendor user',()=>{
  test('Login Home Page Successfully',async ({page})=>{
    await myFunctions.loginFunction(page, 'https://www.viet18.com/login', 'userisvendor@test.com', '123456');
  });
  test('Login Home Page Failed', async ({page}) => {
    await myFunctions.loginFailed(page, 'https://www.viet18.com/login', 'userisvendor@test.com', '123455', "Login failed. Invalid email or password.");
  });
});


