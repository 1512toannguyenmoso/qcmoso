// Homepage


 
const {test, expect} = require('@playwright/test');

test ('Home Page', async ({page}) => {
    await page.goto('https://x.moso.com/');

    const pageTitle = page.title ()
        console.log('Page title is', pageTitle);

    await expect(page).toHaveTitle('Home | X Moso');

        const pageURL = page.url();
        console.log('Page URL is: ', pageURL);

    await expect(page).toHaveURL('https://x.moso.com/')



    await page.close();

})

test ('Log in', async ({page}) => {

    await page.goto('https://www.youtube.com/');

    await expect(page).toHaveTitle('YouTube');

    await page.waitForSelector('role=link[name="Home"]', { timeout: 5000 }); // Chờ tối đa 5 giây
    await page.getByRole('link', { name: 'Home' }).click();

    await page.waitForSelector('role=link[name="Post"]', { timeout: 5000 });
    await page.getByRole('link', {name: 'Post'}).click();

    await page.fill('input[placeholder="Search"]', 'Dear alcohol');

})


test('log in', async ({page}) => {


    await page.goto('https://www.youtube.com/');

    await expect(page).toHaveTitle('YouTube');

    await page.getByRole('link', {name:"Sign in"}).click();

    await page.waitForSelector('role=link[name="Email or phone"]', {timeout:5000});
    await page.fill('input[palceholser="Email or phone"]','chi.tran@moso.com');

    await page.getByRole('link',{name: "Next"}).click();
}) */

/*const {test, except} = require ('@playwright/test');

test ('Home Page', async ({page}) => {

    await page.goto ('https://www.viet18.com/');

    await page.getByRole('link',{name: "Rate quote"}).click();

})

