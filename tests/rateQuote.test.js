const { test, expect } = require('@playwright/test');
const { RateQuotePage } = require('./pages/RateQuotePage');


test.describe('Rate Quote Form Tests', () => {
    test.beforeEach(async ({ page }) => {
        const rateQuotePage = new RateQuotePage(page);
        await rateQuotePage.navigateToRateQuote();
    });

    test('should validate loan amuont constraints', async ({ page}) =>{
        const rateQuotePage = new RateQuotePage(page);

        //Valid loan amount
        await rateQuotePage.setLoanAmount(250000);
        expect(await rateQuotePage.isLoanAmountValid()).toBeTruthy();

        //Below minium loan amount
        await rateQuotePage.resetForm();
        await rateQuotePage.setLoanAmount(5000);
        expect(await rateQuotePage.isLoanAmountValid()).toBeFalsy();

        await rateQuotePage.resetForm();
        await rateQuotePage.setLoanAmount(15000000);
        expect(await rateQuotePage.isLoanAmountValid()).toBeFalsy();
    });

    test('should validate property value constraints', async ({ page }) => {
        const rateQuotePage = new RateQuotePage(page);

        //Valid property value
        await rateQuotePage.setPropertyValue(500000);
        expect(await rateQuotePage.isPropertyValueValid()).toBeTruthy();


        //Below minimum property value
        await rateQuotePage.resetForm();
        await rateQuotePage.setPropertyValue(150000000);
        expect(await rateQuotePage.isPropertyValueValid()).toBeFalsy();
    });

    test('should validate ZIP code format', async ({ page }) =>{
        const rateQuotePage = new RateQuotePage(page);

        //Valid 5-digit ZIP code
        await rateQuotePage.resetForm();
        await rateQuotePage.setZipCode(123);
        expect(await rateQuotePage.setZipCodeValid()).toBeFalsy();

        //Too long ZIP code
        await rateQuotePage.resetForm();
        await rateQuotePage.setZipCode(32136466422);
        expect(await rateQuotePage.isZipCodeValid()).toBeFalsy();

    });

    test ('should submit form with valid data', async ({ page}) =>{
        const rateQuotePage = new RateQuotePage(page);

        await rateQuotePage.setLoanAmount(300000);
        await rateQuotePage.setPropertyValue(450000);
        await rateQuotePage.setZipCode(90210);

        await rateQuotePage.submitForm();
    });
});