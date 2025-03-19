import {LoginPage,ApplicationPage} from '../Practice/BasePage.js';
class BaseUser{
    constructor(page){
        this.page = page;
        this.signinPage = new LoginPage(page);
        this.ApplicationPage = new ApplicationPage(page);
    }
};
export class Borrower extends BaseUser{
    constructor(page){
        super(page);
    };
    async BorrowerLogin(username,password){
        await this.signinPage.login(username,password);
    };
    async BorrowerCreatePreApprovalLoan(username,password){
        await this.ApplicationPage.CreatePreApprovalLetter(username,password);
    };
    async BorrowerCreatePurchaseLoan(username,password){
        await this.ApplicationPage.CreatePurchaseLoan(username, password);
    };
    async BorrowerCreateRefinanceRateTermLoan(username,password){
        await this.ApplicationPage.CreateRefinanceRateTermLoan(username,password);
    };
    async BorrowerCreateRefinanceCashOutLoan(username,password){
        await this.ApplicationPage.CreateRefinanceCashOutLoan(username,password);
    }
};
export class Admin extends BaseUser{
    constructor(page){
        super(page);
        this.signinPage = new LoginPage(page);
    }
    async AdminLogin(username, password){
        await this.signinPage.login(username,password);
    }
}

