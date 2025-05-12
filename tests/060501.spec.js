import {test, expect} from '@playwright/test';
/*
test ('Locators', async({page})=>{

    await page.goto("https://www.demoblaze.com/");

//Username
    //await page.locator('id=login2').click()
    await page.click('id=login2')

    //CSS
    //await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername',"pavanol")

//Password
    //CSS
    //await page.locator('#loginpassword').fill('test@123')
    await page.fill("input[id='loginpassword']",'test@123')

//Click login button X-Path
    await page.click("//button[normalize-space()='Log in']")

//Verify Log out  X-Path
    const logoutlink =  await page.locator("//a[normalize-space()='Log out']")
    await expect (logoutlink).toBeVisible();
    await page.close();

})



test('Viet18 Login Test', async ({ page }) => {
  // Navigate to the website with appropriate timeout
  await page.goto('https://www.viet18.com/', { timeout: 30000 });
  
  // Wait for page to fully load
  await page.waitForLoadState('networkidle');
  
  // Use proper selector formatting and click the sign in button
  const signInButton = page.locator("//button[normalize-space()='Sign in']");
  await signInButton.waitFor({ state: 'visible', timeout: 5000 });
  await signInButton.click();
  
  // Wait for login form to appear
  await page.waitForSelector('#email', { state: 'visible', timeout: 5000 });
  
  // Use proper selector format for email field
  await page.locator('#email').fill('chauchau.inc@gmail.com');
  
  // Fix the password selector format
  //await page.locator('#password').fill('Phuong123456');
  await page.fill('#password','Phuong123456')
  // Add login button click
  const loginButton = page.locator('button[type="submit"]');
  await loginButton.click();
  
  // Add verification for successful login
  await page.waitForSelector('.user-profile-section', { 
    state: 'visible',
    timeout: 10000 
  });
  
  // Verify login success
  const isLoggedIn = await page.isVisible('.user-profile-section');
  expect(isLoggedIn).toBeTruthy();
  
})
*/

test ('Viet18 test login',async ({page})=>{

    await page.goto('https://www.viet18.com/')
    await page.waitForLoadState("networkidle")
   // await page.click("//button[normalize-space()='Sign in']");
    await page.locator("//button[normalize-space()='Sign in']").click()


   // await page.fill("//input[@id='email']",'chauchau.inc@gmail.com')
    const pageEmail = page.locator("//input[@id='email']")
    await pageEmail.fill('chauchau.inc@gmail.com')

    await page.fill("//input[@id='password']",'Phuong123456')
    await page.click('#gwt-debug-submit')
    await page.waitForLoadState("networkidle")
    
})