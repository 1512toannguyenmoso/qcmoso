import { LoginPage, RegisterBorrowerAndFillApplication } from './pageManagement';

class BaseUser{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.registerBorrower = new RegisterBorrowerAndFillApplication(page);
        this.loginBorrowerAndCreatePurchase = new RegisterBorrowerAndFillApplication(page);
    }
}
export class Admin extends BaseUser{
    constructor(page){
        super(page);
    }
    async adminLogin(email, password){
        await this.loginPage.login(email, password);
    }
}
export class Borrower extends BaseUser{
    constructor(page){
        super(page);
    }
    async borrowerLogin(email, password){
        await this.loginPage.login(email, password);
    }
    async registerBorrowerAccount1(email, password){
        await this.registerBorrower.registerBorowerAccount(email, password);
    }
    async loginBorrowerAndCreatePurchaseLoan(email, password){
        await this.loginBorrowerAndCreatePurchase.loginBorrowerAndCreatePurchaseLoanManual(email, password);
    }
}