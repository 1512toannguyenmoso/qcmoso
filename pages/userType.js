import { LoginPage, RegisterBorrower } from './pageManagement';

class BaseUser{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.registerBorrower = new RegisterBorrower(page);
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
    async registerBorrower1(email, password){
        await this.registerBorrower.registerAndCreateLoanPurchase(email, password);
    }
}
