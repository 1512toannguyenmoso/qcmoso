// Homepage

import {test, expect} from ('@playwright/test');

test ('test' , async ({page}) => {

    await page.goto('https://playwright.dev/');
    await page.getByRole ('Link', {name: 'Get started'}).click();
    await page.getByLabel('Search').Click();
    await page.getByPlaceholder ('Search docs').Fill('Installation');
    await page.getByPlaceholder ('Search docs').press('Enter');

})