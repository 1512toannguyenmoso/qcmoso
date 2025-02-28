const {test , expect} = require('@playwright/test');


test ('HOme Page', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html')

    const pageTitle = page.title();
    
    console.log ('Page title is: ', pageTile);

    await expect (page).toHaveTitle('STORE');

    const pageURL = page.url ();
    console.log ('Page URL:',pageURL);

    await expect (page).toHaveURL('https://demoblaze.com/index.html');
    await page.close();

})