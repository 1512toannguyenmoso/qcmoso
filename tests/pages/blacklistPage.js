// @ts-nocheck
const {expect} = require('@playwright/test');
const Module = require('module');

class BlacklistPage {
    /**
     * @param {import('@playwright/test').page} page
     */

    constructor(page) {
        this.page = page;
        this.userTab = 'text=Users';
        this.associatesTab ='text=Associates';
        this.blacklistButton = '//button[@id="blacklist"]';
        this.addButton = '//button[@id="gwt-debug-add"]';
        this.firstNameInput = 'input[name="first_name]';
        this.lastNameInput = 'input[name="last_name]';
        this.emailInput = 'input[name="email"]';
        this.nmlsInput = '#originator_nmls input';
        this.reasonTextArea = 'textarea[name="terminate_reason_detail"]';
        this.dateField = 'div[aria-label="Date black listed"]';
        this.todayDate = '.flatpickr-day.today';
        this.submitButton = 'text=Submit';
    }

    async navigateToBlackList(){
        await this.page.click(this.userTab);
        console.log('click on Users tab');

        await this.page.click(this.associatesTab);
        console.log('click on Associates tab');

        await this.page.click(this.blacklistButton);
        console.log('Click on black list');
        
        await this.page.click(this.addButton);
        console.log('Click on add button');
    }

    async addNewBlacklistEntry(firtName, lastName, email, nmls, reason){
        

        await this.page.fill(this.firstNameInput, firtName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.nmlsInput, nmls);
        await this.page.fill(this.reasonTextArea, reason);

        await this.page.class(this.dateField);
        await this.page.click(this.todayDate);
        console.log('selecterd todays date');

        await this.page.click(this.submitButton);
        console.log('Form submitted successfully');

    }
}

module.exports = {BlacklistPage};