import { LoginPage, RegisterBorrower, FillApplicationManually } from './pageManagement';

class BaseUser{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.registerBorrower = new RegisterBorrower(page);
        this.loginBorrowerAndCreatePurchaseLoan = new FillApplicationManually(page);
    }
    async gotoLoginPage() {
        await this.page.goto("https://www.viet18.com/login");
    }
    async registerAccount(email, password){
        await this.page.goto("https://www.viet18.com/apply");
    }
}
export class Admin extends BaseUser{
    constructor(page){
        super(page);
    }
    async adminLogin(email, password){
        await this.gotoLoginPage();
        await this.loginPage.emailInput.type(email, {delay: 50});
        await this.loginPage.passwordInput.type(password, {delay: 50});
        await this.loginPage.loginButton.click();
    }
}
export class Borrower extends BaseUser{

    constructor(page){
        super(page);
    }
    async borrowerLogin(email, password){
        await this.gotoLoginPage();
        await this.loginPage.emailInput.type(email, {delay: 30});
        await this.loginPage.passwordInput.type(password, {delay: 30});
        await this.loginPage.loginButton.click();
    }
    async registerBorrowerAccount(email, password){
        await this.registerAccount();
        await this.registerBorrower.loanPurposeBuyAHome.click();
        await this.registerBorrower.purchase.click();
        await this.registerBorrower.emailInput.fill(email);
        await this.registerBorrower.nextButton.click();
        await this.registerBorrower.passwordInput.fill(password);
        await this.registerBorrower.createNewAccountButton.click();
    }
    async loginBorrowerAndCreatePurchaseLoanManual(email, password){
        await this.registerAccount();
        await this.registerBorrower.loanPurposeBuyAHome.click();
        await this.registerBorrower.purchase.click();
        await this.registerBorrower.emailInput.fill(email);
        await this.registerBorrower.nextButton.click();
        await this.registerBorrower.passwordInput.fill(password);
        await this.registerBorrower.loginButton.click();
        await this.loginBorrowerAndCreatePurchaseLoan.skipFillManuallyButton.click();
        // Loan info
        await this.loginBorrowerAndCreatePurchaseLoan.page.fill("//input[@id='zip']", "95123");
        await this.loginBorrowerAndCreatePurchaseLoan.autoFillButton.click();
        await this.loginBorrowerAndCreatePurchaseLoan.saveAndNextButton.click();
        // Borrower info
        

        await this.page.waitForTimeout(3000);
    }
}