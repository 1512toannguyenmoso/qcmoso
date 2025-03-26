import {LoginPage,ApplicationPage,BorrowerPortal,ApplicationForm1003} from '../Practice/BasePage.js';
class BaseUser{
    constructor(page){
        this.page = page;
        this.signinPage = new LoginPage(page);
        this.ApplicationTab = new ApplicationPage(page);
        this.ApplicationForm = new ApplicationForm1003(page)
    }
};
export class Borrower extends BaseUser{
    constructor(page){
        super(page);
    };
    async BorrowerLogin(username,password){
        await this.signinPage.login(username,password);
    };
    //Borrower login to borrower portal and create loan.
    async BorrowerCreatePurchaseLoan(username,password){
        await this.BorrowerLogin(username,password);
        await this.ApplicationForm.startNewApplication_Locator.click();
        await this.ApplicationForm.buyAHome_Locator.waitFor({ state: 'visible' });
        await this.ApplicationForm.buyAHome_Locator.click();
        await this.ApplicationForm.sellerAcceptedMyOffer.click();
        await this.ApplicationForm.SkipAndFillApplicationManually_Locator.click();
    };
    async BorrowerCreatePreApprovalLoan(username,password){
        await this.BorrowerLogin(username,password);
        await this.ApplicationForm.startNewApplication_Locator.click();
        await this.ApplicationForm.buyAHome_Locator.waitFor({ state: 'visible' });
        await this.ApplicationForm.buyAHome_Locator.click();
        await this.ApplicationForm.preapprovalLetter_Locator.click();
        await this.ApplicationForm.SkipAndFillApplicationManually_Locator.click();
        
    };
    async BorrowerCreateRefinanceRateTermLoan(username,password){
        await this.BorrowerLogin(username,password);
        await this.ApplicationForm.startNewApplication_Locator.click();
        await this.ApplicationForm.refinance_Locator.waitFor({ state: 'visible' });
        await this.ApplicationForm.refinance_Locator.click();
        await this.ApplicationForm.refinanceRatePayment_Locator.click();
        await this.ApplicationForm.SkipAndFillApplicationManually_Locator.click();
    };
    async BorrowerCreateRefinanceCashOutLoan(username,password){
        await this.BorrowerLogin(username,password);
        await this.ApplicationForm.startNewApplication_Locator.click();
        await this.page.waitForLoadState('networkidle');
        await this.ApplicationForm.refinance_Locator.waitFor({ state: 'visible' });
        await this.ApplicationForm.refinance_Locator.click();
        await this.ApplicationForm.refinanceCashOut_Locator.click();
        await this.ApplicationForm.SkipAndFillApplicationManually_Locator.click();
    };
    //Non logged in borrower create loan
    async NonLoggedInBorrowerCreatePurchaseLoan(username,password){
        await this.ApplicationTab.loanApplication_Locator.click();
        await this.ApplicationForm.buyAHome_Locator.click();
        await this.ApplicationForm.sellerAcceptedMyOffer.click();
        await this.ApplicationTab.userNameRegister_Locator.fill(username);
        await this.ApplicationTab.nextButton_Locator.click();
        await this.ApplicationTab.passwordRegister_Locator.fill(password);
        await this.ApplicationTab.createNewAccount_Locator.click();
        await this.ApplicationForm.SkipAndFillApplicationManually_Locator.click();
    };
    async NonLoggedInBorrowerCreatePreApprovalLoan(username,password){
        await this.ApplicationTab.loanApplication_Locator.click();
        await this.ApplicationForm.buyAHome_Locator.click();
        await this.ApplicationForm.preapprovalLetter_Locator.click();
        await this.ApplicationTab.userNameRegister_Locator.fill(username);
        await this.ApplicationTab.nextButton_Locator.click();
        await this.ApplicationTab.passwordRegister_Locator.fill(password);
        await this.ApplicationTab.createNewAccount_Locator.click();
        await this.ApplicationForm.SkipAndFillApplicationManually_Locator.click();
    };
    async NonLoggedInBorrowerCreateRefinanceRateTermLoan(username,password){
        await this.ApplicationTab.loanApplication_Locator.click();
        await this.ApplicationForm.refinance_Locator.click();
        await this.ApplicationForm.refinanceRatePayment_Locator.click();
        await this.ApplicationTab.userNameRegister_Locator.fill(username);
        await this.ApplicationTab.nextButton_Locator.click();
        await this.ApplicationTab.passwordRegister_Locator.fill(password);
        await this.ApplicationTab.createNewAccount_Locator.click();
        await this.ApplicationForm.SkipAndFillApplicationManually_Locator.click();
    };
    async NonLoggedInBorrowerCreateRefinanceCashOutLoan(username,password){
        await this.ApplicationTab.loanApplication_Locator.click();
        await this.ApplicationForm.refinance_Locator.click();
        await this.ApplicationForm.refinanceCashOut_Locator.click();
        await this.ApplicationTab.userNameRegister_Locator.fill(username);
        await this.ApplicationTab.nextButton_Locator.click();
        await this.ApplicationTab.passwordRegister_Locator.fill(password);
        await this.ApplicationTab.createNewAccount_Locator.click();
        await this.ApplicationForm.SkipAndFillApplicationManually_Locator.click();
    };
};
export class Admin extends BaseUser{
    constructor(page){
        super(page);
    }
    async AdminLogin(username,password){
        await this.signinPage.login(username,password);
    }
};