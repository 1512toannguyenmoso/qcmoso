import { QuoteWidgetCompany, QuoteWidgetLoanOfficerPage, LoginPage, RegisterBorrower, FillApplicationManually } from './pageManagement';

class BaseUser {
    constructor(page) {
        this.page = page;
        this.quoteWidgetCompany = new QuoteWidgetCompany(page);
        this.quoteWidgetLoanOfficerPage = new QuoteWidgetLoanOfficerPage(page);
        this.loginPage = new LoginPage(page);
        this.registerBorrower = new RegisterBorrower(page);
        this.loginBorrowerAndCreatePurchaseLoan = new FillApplicationManually(page);
    }
    async gotoLoginPage() {
        await this.page.goto("https://www.viet18.com/login");
    }
    async gotoBorrowerApplyPage() {
        await this.page.goto("https://www.viet18.com/apply");
    }
    async companyWebsite() {
        await this.page.goto("https://www.viet18.com");
    }
    async loanOfficerPage() {
        await this.page.goto("https://www.viet18.com/mindiebachdontchangeemail");
    }
}

export class Common extends BaseUser {
    constructor(page) {
        super(page);
    }
    async getQuoteWidgetCompanyQm() {
        await this.companyWebsite();
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(5000);
        await this.quoteWidgetCompany.quoteWidgetCompanyQm.click();
        await this.quoteWidgetCompany.quoteWidgetCompanyGetQuoteButton.click();
        await this.quoteWidgetCompany.preTaxIncomeDropdown.click();
        
        // await this.quoteWidgetCompany.valuePreTaxIncome.click();
        await this.quoteWidgetCompany.showRateButton.click();
    }
    async getQuoteWidgetCompanyNonQm() {
        await this.companyWebsite();
        await this.quoteWidgetCompany.quoteWidgetCompanyNonQm.click();
        await this.quoteWidgetCompany.quoteWidgetCompanyGetQuoteButton.click();
        await this.page.waitForTimeout(3000);
    }
}

export class Admin extends BaseUser {
    constructor(page) {
        super(page);
    }
    async adminLogin(email, password) {
        await this.gotoLoginPage();
        await this.loginPage.emailInput.type(email, { delay: 50 });
        await this.loginPage.passwordInput.type(password, { delay: 50 });
        await this.loginPage.loginButton.click();
    }
}

export class Borrower extends BaseUser {

    constructor(page) {
        super(page);
    }
    async borrowerLogin(email, password) {
        await this.gotoLoginPage();
        await this.loginPage.emailInput.type(email, { delay: 30 });
        await this.loginPage.passwordInput.type(password, { delay: 30 });
        await this.loginPage.loginButton.click();
    }
    async registerBorrowerAccount(email, password) {
        await this.gotoBorrowerApplyPage();
        await this.registerBorrower.loanPurposeBuyAHome.click();
        await this.registerBorrower.purchase.click();
        await this.registerBorrower.emailInput.fill(email);
        await this.registerBorrower.nextButton.click();
        await this.registerBorrower.passwordInput.fill(password);
        await this.registerBorrower.createNewAccountButton.click();
    }
    async loginBorrowerAndCreatePurchaseLoanManual(email, password) {
        await this.gotoBorrowerApplyPage();
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