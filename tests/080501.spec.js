/*import {test, expect} from '@playwright/test';
test('Loan Factory test login', async ({page})=> {

    await page.goto('https://www.loanfactory.com/')
    await page.waitForLoadState('networkidle')

    await page.click("//button[normalize-space()='Sign in']")
    await page.waitForLoadState('networkidle')
    //await page.fill("//input[id='email']",'chi.tran@moso.com')
    const pageEmail = page.locator("//input[@id='email']").fill('chi.tran@moso.com')
    //await page.fill('#password','pppppp')
    const pagePassword = page.locator('#password')
    await page.fill('pppppp')
    await page.click("#gwt-debug-submit")

})
*/

import { test, expect } from '@playwright/test';

test('Loan Factory Login Test', async ({ page }) => {
  // Navigate to the website with appropriate timeout
  await page.goto('https://www.loanfactory.com/', { timeout: 30000 });
  
  // Wait for page to be fully loaded
  await page.waitForLoadState('networkidle');
  
  try {
    // Click the sign in button using a more robust selector
    const signInButton = page.locator("//button[normalize-space()='Sign in']");
    await signInButton.waitFor({ state: 'visible', timeout: 5000 });
    await signInButton.click();
    
    // Wait for login form to appear after clicking sign in
    await page.waitForLoadState('networkidle');
    await page.waitForSelector("#email, input[id='email']", { state: 'visible', timeout: 5000 });
    
    // Fix the email selector and proper use of fill method
    // The XPath was incorrect - should be //input[@id='email'] not //input[id='email']
    await page.locator("#email, //input[@id='email']").first().fill('chi.tran@moso.com');
    
    // Fix the password field fill operation
    // The pagePassword locator was defined but not used, and the fill method was incorrectly called
    await page.locator('#password').fill('pppppp');
    
    // Click the submit button
    await page.locator("#gwt-debug-submit").click();
    
    // Add verification for successful login
    await page.waitForSelector('.user-profile, .dashboard, .welcome-message', { 
      state: 'visible',
      timeout: 10000 
    });
    
    // Verify login was successful
    const isLoggedIn = await page.isVisible('.user-profile, .dashboard, .welcome-message');
    expect(isLoggedIn).toBeTruthy();
    
    console.log('Successfully logged in to Loan Factory');
    
    // Take screenshot of logged-in state
    await page.screenshot({ path: 'loanfactory-logged-in.png' });
    
  } catch (error) {
    // Capture screenshot on failure
    await page.screenshot({ path: 'loanfactory-error.png' });
    console.error(`Login test failed: ${error.message}`);
    throw error; // Re-throw the error to fail the test
  }
});