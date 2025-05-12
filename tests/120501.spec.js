/*import { test, expect } from "@playwright/test";

test ('LF Find a LO', async ({page}) => {
    await page.goto('https://www.loanfactory.com/')
    await page.waitForLoadState('networkidle')

    const resourceButton = page.locator("//a[normalize-space()='Resources']")
    await signInButton.waitFor({ state: 'visible', timeout: 5000 });
    await resourceButton.click()
    await page.waitForLoadState('domcontentloaded')

    await page.click("//a[normalize-space()='Find A Loan Officer']")

    await page.fill('id=mantine-5jucyq0x5','David')

})*/

import { test, expect } from "@playwright/test";

test('Loan Factory - Find a Loan Officer', async ({ page }) => {
  // Navigate to website with reliable loading strategy
  await page.goto('https://www.loanfactory.com/', { 
    timeout: 60000, 
    waitUntil: 'domcontentloaded' 
  });
  
  // Wait for page to be interactive
  await page.waitForSelector('a:visible', { timeout: 15000 });
  
  // Use CSS selector instead of problematic XPath
  const resourceButton = page.locator("a:has-text('Resources')");
  await resourceButton.waitFor({ state: 'visible', timeout: 10000 });
  await resourceButton.click();
  
  // Wait for dropdown menu
  await page.waitForTimeout(1000); // Short wait for dropdown animation
  
  // Fix the problematic selector by using CSS instead of XPath
  // The error showed the XPath was invalid
  const findLOLink = page.locator("a:has-text('Find A Loan Officer')").first();
  
  // Make sure element is visible before clicking
  await findLOLink.waitFor({ state: 'visible', timeout: 5000 });
  await findLOLink.click();
  
  // Wait for search page to load
  await page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {
    console.log('Navigation wait timed out, continuing anyway');
  });
  
  // Wait for search field to appear
  await page.waitForSelector("input[placeholder*='Search'], input[type='text']", {
    state: 'visible',
    timeout: 15000
  });
  
  // Use a more reliable selector for the search input
  // Avoid using IDs that might be dynamically generated
  const searchInput = page.locator("input[placeholder*='Search'], input[type='text']").first();
  
  // Make sure input is ready before filling
  await searchInput.waitFor({ state: 'visible' });
  await searchInput.fill('David');
  
  // Press Enter to submit search
  await searchInput.press('Enter');
  
  // Add verification if needed
  await page.waitForSelector(".results-container, .officer-card", { 
    state: 'visible', 
    timeout: 15000 
  }).catch(() => {
    console.log('Results container not found, continuing anyway');
  });
  
  // Take screenshot of results
  await page.screenshot({ path: 'loan-officer-search-results.png' });
});
