// @ts-check
const { test } = require('@playwright/test');
const { loginPage } = require('./pages/loginPage');
const { BlacklistPage } = require('./pages/blacklistPage');

test('Viet18 Blacklist Test - Add New Associate to Blacklist', async ({ page }) => {
  const LoginPage = new loginPage(page);
  const blacklistPage = new BlacklistPage(page);

  // Navigate to website and login
  await LoginPage.navigateToLogin();
  await LoginPage.Login('chauchau.inc@gmail.com', 'Phuong123456');

  // Navigate to Blacklist and add a new entry
  await blacklistPage.navigateToBlackList();
  await blacklistPage.addNewBlacklistEntry(
    'Michael',
    'Johnson',
    'mjohnson284@example.com',
    '1234567',
    'Failed to meet quality standards and violated company policies on multiple occasions.'
  );

  // Take a screenshot for verification
  await page.screenshot({ path: 'blacklist-submission-result.png' });
  console.log('Test completed successfully');
});