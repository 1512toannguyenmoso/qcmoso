export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = "//input[@id='email']"; // Selector cho ô nhập username
        this.passwordInput = "//input[@id='password']"; // Selector cho ô nhập password
        this.loginButton = "//button[@id='gwt-debug-submit']"; // Selector cho nút đăng nhập
    }
    async login(email, password) {
        await this.page.goto("https://www.viet18.com/login");
        await this.page.type(this.emailInput, email, {delay: 50});
        await this.page.type(this.passwordInput, password, {delay: 50});
        await this.page.click(this.loginButton);
    }
}
export class RegisterBorrowerAndFillApplication {
    constructor(page){
        this.page = page;
        this.emailInput = "//input[@id='email']";
        this.passwordInput = "//input[@id='password']";
        this.nextButton = "//button[@id='gwt-debug-next']";
        this.createNewAccountButton = "//button[3]";
        this.loanPurposeRefinance = "//button[@id='refinance']//div";
        this.refinanceRT = "//button[@id='i-want-lower-ratespayments']//div";
        this.refinanceCashout = "//button[@id='i-want-cash-out']//div";
        this.loanPurposeBuyAHome = 'button:has-text("I want to BUY A HOME")';
        this.preApproval = "//button[@id='i-want-a-pre-approval-letter']//div";
        this.purchase = 'button:has-text("Seller accepted my offer")';
        this.loginButton = "//button[4]";
        this.autoFillButton = "//a[@id='gwt-debug-__floating_fill-form']";
        this.skipFillManuallyButton = "//button[@id='skip-and-fill-application-manually']";
        this.saveAndNextButton = "//button[@id='gwt-debug-next']";
        this.addAddressHistory = "(//button[@id='i-classmaterial-icons-unset-iconsaddcirclei-add'])[5]";
    }
    async registerBorowerAccount(email, password){
        await this.page.goto("https://www.viet18.com/apply");
        await this.page.click(this.loanPurposeBuyAHome);
        await this.page.click(this.purchase);
        await this.page.fill(this.emailInput, email);
        await this.page.click(this.nextButton);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.createNewAccountButton);
    }
    async loginBorrowerAndCreatePurchaseLoanManual(email, password){
        await this.page.goto("https://www.viet18.com/apply");
        await this.page.click(this.loanPurposeBuyAHome);
        await this.page.click(this.purchase);
        await this.page.fill(this.emailInput, email);
        await this.page.click(this.nextButton);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
        await this.page.click(this.skipFillManuallyButton);
        // Loan info
        await this.page.fill("//input[@id='zip']", "95123");
        await this.page.click(this.autoFillButton);
        await this.page.click(this.saveAndNextButton);
        // Borrower info
        

        await this.page.waitForTimeout(3000);
    }
}
