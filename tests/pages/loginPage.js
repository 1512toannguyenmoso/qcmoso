//@ts-check
const { expect } = require('@playwright/test');

class loginPage {
    /**
   * @param {import('@playwright/test').Page} page
   */
   constructor(page){

    this.page = page;
    this.emailInput = 'input[type ="email"]';
    this.passwordInput = 'input[type = "password"]';
    this. signInButton = 'button', { name: 'Sign in' };
    this.submitButton = '//button[@id="gwt-debug-submit"]';
   } 

   async navigateToLogin(){
    await this.page.goto('https://www.viet18.com');
    console.log('Navigate to Viet18 homepage');
   }

    async Login(email,password){
        await this.page.click(this.signInButton);
        console.log('Click Sign in button');
    
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.submitButton);
        console.log('fill login and click login button');

        // try{
        //     await this.page.click(this.submitButton);
        //     console.log('Clicked the secondary login button');
        // } catch (error){
        //     console.log('secondary login not found or not needed');
        // }
    }
}
module.exports = {loginPage};