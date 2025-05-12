/*import { test, expect } from '@playwright/test';

test('Home Page', async ({page})=> {

    await page.goto('https://www.demoblaze.com/'); //gọi url của page
    const pageTitle = page.title(); //gắn biến cho title
        console.log ('Title = ', pageTitle); //in title

        await expect(page).toHaveTitle('STORE'); //Xác thực xem title có là STORE 
    const pageURL = page.url();
        console.log ('URL = ', pageURL);

        await expect(page).toHaveURL('https://www.demoblaze.com/'); //Xác thực URL của page
        await page.close();


}) 

import {test, expect} from '@playwright/test';

test ('Loan Factory', async ({page})=>{
    await page.goto ('https://www.loanfactory.com/');
    const pageTitle = page.title ();
    console.log('Title = ', pageTitle);
    await expect(page).toHaveTitle('Loan Factory - We Dare You To Compare')


    const pageURL = page.url();
    console.log('URL: ', pageURL);
    await expect(page).toHaveURL('https://www.loanfactory.com/');

    await page.getByRole ('button', {name: 'Sign in'}).click();
    
    await page.fill ('input[email="Email"]','chi.tran@moso.com');
    await page.fill ('input[password="Password"]', 'pppppp');

})

/*import {test, expect} from '@playwright/test';

test ('Viet18', async ({page})=>{   
    await page.goto('https://lf-homepage-master-233682574497.us-central1.run.app/en/newsletters');
    const pageTitle = page.title ();
    console.log('Title =', pageTitle);
    await expect(page).toHaveTitle('NewsLetters - LoanFactory');
    page.close();

    
}

// Import Playwright
const { test, expect } = require('@playwright/test');

test('Sign in to LoanFactory', async ({ page }) => {
  // Mở trang LoanFactory
  await page.goto('https://www.loanfactory.com/');

  // Chờ và nhấn nút Sign In (Giả sử nút này có selector là 'text="Sign In"')
  await page.locator('text=Sign In').click();

  // Chờ cho đến khi trang đăng nhập được tải
  await page.waitForSelector('input[name="email"]');  // Giả sử đây là input email

  // Điền email vào ô email
  await page.fill('input[name="email"]', 'chi.tran@moso.com');

  // Điền mật khẩu vào ô mật khẩu
  await page.fill('input[name="password"]', 'pppppp');

  await page.locator('#gwt-debug-submit').click();

await page.goBack();

await page.reload();

})

import {test,except} from "@playwright/test";

test ('xmoso', async ({page}) => {

    await page.goto('https://x.moso.com/');
    const pageTitle = page.title ();
    console.log ('Title',pageTitle);
   
   
    await page.fill('input[name="email"]','chi.tran@moso.com');
    await page.fill('input[name="password"]','pppppp');
    await page.locator('#gwt-debug-submit').click();

    await page.reload();

})

test ('Youtube',async ({page})=>{

    await page.goto('https://www.youtube.com/');
    const pageTitle = page.title();
    await page.fill('#Search', 'Playwright',{ delay: 30000 });
    await page.press('#Search', 'Enter');

}) */

import {test, expect} from '@playwright/test';

test('YouTube Search Test', async ({ page }) => {
    // Navigate to YouTube with a longer timeout for initial load
    await page.goto('https://www.youtube.com/', { timeout: 60000 });
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Get the page title for verification
    const pageTitle = await page.title();
    console.log(`Page title: ${pageTitle}`);
    
    // First, try to locate the consent dialog that may appear and accept it if present
    try {
      const consentButton = page.locator('button:has-text("Accept all")');
      if (await consentButton.isVisible({ timeout: 5000 })) {
        await consentButton.click();
      }
    } catch (e) {
      // Consent dialog may not appear, continue with the test
      console.log('No consent dialog found or already accepted');
    }
    
    // Look for the search input using several strategies
    // Try multiple selectors to improve reliability
    const searchInput = await page.locator([
      '[name="search_query"]', 
      'input#search',
      '[placeholder="Search"]'
    ]).first();
    
    // Make sure the element is visible and ready before interacting
    await searchInput.waitFor({ state: 'visible', timeout: 10000 });
    
    // Clear any existing text and fill with search term
    // No delay parameter - let Playwright handle the typing speed naturally
    await searchInput.click();
    await searchInput.fill('Playwright');
    
    // Press Enter to submit search
    await searchInput.press('Enter');
    
    // Add verification that search results appeared with a generous timeout
    await page.waitForSelector('#contents ytd-video-renderer, ytd-video-renderer', {
      state: 'visible',
      timeout: 30000 // Increase timeout for search results
    });
    
    console.log('Search results loaded successfully');
  })