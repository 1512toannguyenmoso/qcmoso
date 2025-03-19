const {expect} = require('@playwright/test');
const {chromium} = require('playwright');


export class LoginPage{
  constructor(page){
    this.page = page;
    this.usernameInput_locator = this.page.locator('//input[@id="email"]');
    this.passwordInput_locator = this.page.locator('//input[@id="password"]');
    this.loginButton_locator = this.page.locator('//button[@id="gwt-debug-submit"]');
    this.error_invalid_email_or_password_locator = this.page.locator('//p[@id="error"]');
    this.error_missing_character_password_locator = this.page.locator("//div[@role='alert']");
    this.emailResetPassword_locator = this.page.locator("//input[@id='email']");
    this.resetPassword_locator = this.page.locator("//button[@id='gwt-debug-submit']");
    this.error_nonexisting_email_locator = this.page.locator("//p[@id='error']");
    this.forgotPassword_locator = this.page.locator("//a[normalize-space()='Forgot password?']");
    this.signInbutton_locator = this.page.locator('button:has-text("Sign in")');
  }
  async login(username, password){
    await this.signInbutton_locator.click();
    await this.usernameInput_locator.fill(username);
    await this.passwordInput_locator.fill(password);
    await this.loginButton_locator.click();
  }
  async resetPassword(email){
    await this.page.signInbutton_locator.click();
    await this.page.forgotPassword_locator.click();
    await this.emailResetPassword_locator.fill(email); 
    await this.resetPassword_locator.click();
  }
  async checkErrorMessage(){
    const errorMessage = {
      error_invalid_email_or_password_locator: 'Login failed. Invalid email or password.',
      error_missing_character_password_locator: 'must have at least 6 characters',
      error_nonexisting_email_locator: 'There is no account associated set this email address.'
    };
    for (const[locator, message] of Object.entries(errorMessage)){
      try{
        await expect(this.locator).toHaveText(message);
        return;
      } catch(error){
        continue;
      }
    }
  };
};

export class ApplicationPage{
  constructor(page){
    this.page = page;
    this.loanApplication_locator = this.page.locator("//a[normalize-space()='Loan Application']");
    this.buyAHome_Locator = this.page.locator('button:has-text("I want to BUY A HOME")');
    this.preapprovalLetter_Locator = this.page.locator('button:has-text("I want a pre-approval letter")');
    this.sellerAcceptedMyOffer = this.page.locator('button:has-text("Seller accepted my offer")');
    this.refinance_locator = this.page.locator('button:has-text("I want to REFINANCE")');
    this.refinanceRatePayment_Locator = this.page.locator('button:has-text("I want lower rates/payments")');
    this.refinanceCashOut_Locator = this.page.locator('button:has-text("I want cash out")');
    this.userNameRegister_Locator = this.page.locator("//input[@id='email']");
    this.passwordRegister_Locator = this.page.locator("//input[@id='password']");
    this.createNewAccount_Locator = this.page.locator("//button[3]");
    this.nextButton_Locator = this.page.locator("//button[@id='gwt-debug-next']");
  };
  async CreatePreApprovalLetter(username,password){
    await this.loanApplication_locator.click();
    await this.page.waitForLoadState('networkidle');
    await this.buyAHome_Locator.click();
    await this.page.waitForLoadState('networkidle');
    await this.preapprovalLetter_Locator.click();
    await this.userNameRegister_Locator.fill(username);
    await this.nextButton_Locator.click();
    await this.passwordRegister_Locator.fill(password);
    await this.createNewAccount_Locator.click();
  };
  async CreatePurchaseLoan(username,password){
    await this.loanApplication_locator.click();
    await this.page.waitForLoadState('networkidle');
    await this.buyAHome_Locator.click();
    await this.page.waitForLoadState('networkidle');
    await this.sellerAcceptedMyOffer.click();
    await this.userNameRegister_Locator.fill(username);
    await this.nextButton_Locator.click();
    await this.passwordRegister_Locator.fill(password);
    await this.createNewAccount_Locator.click();
  };
  async CreateRefinanceRateTermLoan(username,password){
    await this.loanApplication_locator.click();
    await this.page.waitForLoadState('networkidle');
    await this.refinance_locator.click();
    await this.page.waitForLoadState('networkidle');
    await this.refinanceRatePayment_Locator.click();
    await this.userNameRegister_Locator.fill(username);
    await this.nextButton_Locator.click();
    await this.passwordRegister_Locator.fill(password);
    await this.createNewAccount_Locator.click();
  };
  async CreateRefinanceCashOutLoan(username,password){
    await this.loanApplication_locator.click();
    await this.page.waitForLoadState('networkidle');
    await this.refinance_locator.click();
    await this.page.waitForLoadState('networkidle');
    await this.refinanceCashOut_Locator.click();
    await this.userNameRegister_Locator.fill(username);
    await this.nextButton_Locator.click();
    await this.passwordRegister_Locator.fill(password);
    await this.createNewAccount_Locator.click();
  };
};
