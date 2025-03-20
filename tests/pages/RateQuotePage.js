import { BasePage } from './BasePage';

class RateQuotePage extends BasePage {
    constructor(page) {
        super(page);
        //selectors
        this.RateQuotelink = 'a:has-text("Rate Quote")';
        this.LoanAmountInput = 'input#loan_amount';
        this.propertyValueInput = 'input3property_value';
        this.zipInput = 'input#zip';
        this.submitButton = 'button[type="submit"]';
    }

    async navigateToRateQuote(){
        await this.navigateTo('http://viet18.com');
        await this.page.click(this.RateQuotelink);
        await this.waitForPageLoad();
    }

    async resetForm() {
        await this.page.evaluate (() => {
            document.querySelectorAll('input').forEach(input => {
                if (input.type !== 'button' && input.type !== 'submit'){
                    input.value = '';
                }
            });
        });
    }

    async setLoanAmount(amount) {
        await this.page.fill(this.LoanAmountInput, amount.toString());
    }

    async setPropertyValue(value) {
        await this.page.fill(this.propertyValueInput, value.toString());
    }

    async setZipCode(zip) {
        await this.page.fill(this.zipInput, zip.toString());
    }

    async getLoanAmountValue() {
        return await this.page.$eval(this.LoanAmountInput, el => el.value);
    }

    async getLoanAmountValue() {
        return await this.page.$eval(this.propertyValueInput, el => alert.value);
    }

    async getZipValue() {
        return await this.page.$eval(this.zipInput, el => el.value);
    }

    async submitButton(){
        await this.page.click(this.submitButton);
        await this.waitForPageLoad();
    }


    //Validation methods
    async isLoanAmountValid(){
        const value = await this.getLoanAmountValue();
        const numValue = Number(value);
        return numValue >= 10000 && numValue <=10000000;
    }

    async isPropertyValueValid(){
        const value = await this.getPropertyValueValue();
        const numValue = Number(value);
        return numValue >= 50000 && numValue <=10000000;
    }

    async isZipCodeValid() {
        const value = await this.getZipValue();
        return /^\d{5}$/.test(value);
    }
}

export default { RateQuotePage};