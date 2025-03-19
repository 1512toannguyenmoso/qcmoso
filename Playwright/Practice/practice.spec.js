import {test, expect} from '@playwright/test';
import myFunctions1 from './BasePage.js';
import myFunctions2, { checkAllBoxInPage } from './navigationPage.js';
import {Borrower, Admin} from '../models/UserManagement.js';
import data from '../utils/datatest.js';
import helpers_function from '../utils/helpers.js'

test.describe.parallel('User create application',() =>{
  let borrower;
  test.beforeEach(async({page}) =>{
    borrower = new Borrower(page);
    await page.goto("https://www.viet18.com/");
  });
  test('Borrower create a purchase loan',async ({page})=>{
    await borrower.BorrowerCreatePurchaseLoan(helpers_function.generateRandomEmail(),"123456");
  });
  test('Borrower create a preapproval loan',async ({page})=>{
    await borrower.BorrowerCreatePreApprovalLoan(helpers_function.generateRandomEmail(),"123456");
  });
  test('Borrower create a refinance rate/term loan',async ({page})=>{
    await borrower.BorrowerCreateRefinanceRateTermLoan(helpers_function.generateRandomEmail(),"123456");
  });
  test('Borrower create a refinance cash-out loan',async ({page})=>{
    await borrower.BorrowerCreateRefinanceCashOutLoan(helpers_function.generateRandomEmail(),"123456");
  });
});
test.describe.parallel('All User authentication',()=>{
  //User authentication, User is admin.
  test.describe('User Authentication Tests, User is admin',() =>{
    let loginPage;
    test.beforeEach('Go to',async({page}) =>{
      loginPage = new myFunctions1.LoginPage(page);
    });
    test('Login Home Page Successfully',async ({page})=>{
      await loginPage.login('userisadminwithfullpermission@viet18.com', '123456');
    });
    test('Login Home Page Failed, Incorrect Password', async({page})=>{
      await loginPage.login('userisadminwithfullpermission@viet18.com', '123457');
      await loginPage.checkErrorMessage();
    });
    test('Login Home Page Failed, Missing character in password', async({page})=>{

      await loginPage.login('userisadminwithfullpermission@viet18.com', '12345');
      await loginPage.checkErrorMessage();
    });
    test('Test reset password of non-existing account', async({page})=>{
      await loginPage.resetPassword("nonexistinguserresetpassword@test.com");
      await loginPage.checkErrorMessage();
    })
  });


  
  //user authentication, user is borrower.
  test.describe('User Authentication Tests, User is borrower',() => {
    test('Register user', async({page})=>{
      await page.goto('https://www.viet18.com/apply');
      await page.click("//p[normalize-space()='I want to BUY A HOME']");
      await page.click("//p[normalize-space()='Seller accepted my offer']");
      await page.fill("//input[@id='email']",helpers_function.generateRandomEmail);
      await page.click("//button[@id='gwt-debug-next']");
      await page.fill("//input[@id='password']",'123456');
      await page.click("//button[3]");
    })
    test('Login Home Page Successfully',async ({page})=>{
      const admin = new Admin(page);
      await admin.AdminLogin('userisborrower@testing.com', '123456');
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
});





