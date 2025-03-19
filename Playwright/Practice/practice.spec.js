import {test, expect} from '@playwright/test';
import myFunctions2, { checkAllBoxInPage } from './navigationPage.js';
import {Borrower, Admin} from '../models/UserManagement.js';
import datatest from '../utils/datatest.js';
import helpers_function from '../utils/helpers.js';

test.describe.parallel('User create application',() =>{
  let borrower;
  test.beforeEach(async({page}) =>{
    borrower = new Borrower(page);
    await page.goto("https://www.viet18.com/");
  });
  test('Borrower login into borrower portal', async ({page})=> {
    await borrower.BorrowerLogin(datatest.borrower.email,datatest.borrower.password);
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





