import { test, expect } from '@playwright/test';
import { Admin, Borrower } from '../pages/userType.js';

// test.describe.serial('List test cases login', () => {

    // test('Login success with admin', async ({ page }) => {
    //     const admin = new Admin(page);
    //     await admin.adminLogin('suspension1@viet18.com', 'zxczxc');
    // });

    // test('Login success with borrower', async ({ page }) => {
    //     const borrower = new Borrower(page);
    //     await borrower.borrowerLogin('testqrinvite11@test.com', 'zxczxc');
    // });
// });

// test('Borrower register', async ({ page }) => {
//     const borrower = new Borrower(page);
//     await borrower.registerBorrowerAccount('suspen6412@viet18.com', 'zxczxc');
// });

test('Login borrower account and create purchase loan manually', async ({ page }) => {
    const borrower = new Borrower(page);
    await borrower.loginBorrowerAndCreatePurchaseLoanManual('suspen544561@viet18.com', 'zxczxc');
});

