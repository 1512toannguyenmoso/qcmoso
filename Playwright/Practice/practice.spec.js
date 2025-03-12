import {test, expect} from '@playwright/test';
import myFunctions1 from './function.js';
import myFunctions2, { checkAllBoxInPage } from './navigationPage.js';

test.describe.parallel('All User authentication',()=>{
  
  //User authentication, User is admin.
  test.describe('User Authentication Tests, User is admin',() =>{
    test('Login Home Page Successfully',async ({page})=>{
      await myFunctions1.loginFunction(page, 'https://www.viet18.com/login', 'userisadminwithfullpermission@viet18.com', '123456');
    });
    test('Login Home Page Failed', async({page})=>{
      await myFunctions1.loginFailed(page, 'https://www.viet18.com/login', 'userisadminwithfullpermission@viet18.com', '123455', 'Login failed. Invalid email or password.');
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
      await page.fill("//input[@id='email']",myFunctions1.generateRandomEmail());
      await page.click("//button[@id='gwt-debug-next']");
      await page.fill("//input[@id='password']",'123456');
      await page.click("//button[3]");
    })
    test('Login Home Page Successfully',async ({page})=>{
      await myFunctions1.loginFunction(page, 'https://www.viet18.com/login', 'userisborrower@testing.com', '123456');
    });
    test('Login Home Page Failed', async ({page}) => {
      await myFunctions1.loginFailed(page, 'https://www.viet18.com/login', 'userisborrower@testing.com', '123455', "Login failed. Invalid email or password.");
    });
  });

  //user authentication, user is lender user.
  test.describe('User Authentication Tests, User is lender user',()=>{
    test('Login Home Page Successfully',async ({page})=>{
      await myFunctions1.loginFunction(page, 'https://www.viet18.com/login', 'userislenderuser@test.com', '123456');
    });
    test('Login Home Page Failed', async ({page}) => {
      await myFunctions1.loginFailed(page, 'https://www.viet18.com/login', 'userislenderuser@test.com', '123455', "Login failed. Invalid email or password.");
    });
  });

  //user authentication, user is vendor user.
  test.describe('User Authentication Tests, User is vendor user',()=>{
    test('Login Home Page Successfully',async ({page})=>{
      await myFunctions1.loginFunction(page, 'https://www.viet18.com/login', 'userisvendor@test.com', '123456');
    });
    test('Login Home Page Failed', async ({page}) => {
      await myFunctions1.loginFailed(page, 'https://www.viet18.com/login', 'userisvendor@test.com', '123455', "Login failed. Invalid email or password.");
    });
});
});
//Navigation
test.describe.parallel('Navigation',() =>{
  test('Navigation to horizontal menu', async({page})=>{
    await myFunctions1.loginFunction(page, 'https://www.viet18.com/login', 'userisadminwithfullpermission@viet18.com', '123456');
    await myFunctions2.navigationFunction(page, myFunctions2.navigationHorizontalList);
  });

  test('Navigation to vertical sub-menu', async({page})=> {
    await myFunctions1.loginFunction(page, 'https://www.viet18.com/login', 'userisadminwithfullpermission@viet18.com', '123456');
    await myFunctions2.navigationToEachSubMenuOnbVerticalMenu(page, myFunctions2.navigationVerticalList2);
  });
});

test('Create new application use autofill', async ({ page }) => {
  test.setTimeout(240000);
  await page.goto('https://www.viet18.com/');
  await page.waitForLoadState('load');

  // Login into system
  await myFunctions1.loginFunction(page, 'https://www.viet18.com/login', 'userisadminwithfullpermission@viet18.com', '123456');
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
  await page.fill("//input[@id='street']", myFunctions1.generateRandomAddress());
  await page.keyboard.press('Enter');
  await page.fill("//input[@id='zip']", '95132');
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
  const HTMLDiv = "com.mvu.loan.client.view.application.DemographicInfoForm";
  const checkBoxList = myFunctions2.getCheckboxInPage(page,HTMLDiv);
  console.log(checkBoxList);
  // checkAllBoxInPage(checkBoxList);
  // await page.click("//div[@class='mt-3']//button[3]");
  // await page.click("//div[@class='clearfix']//button[2]");

});