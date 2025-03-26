export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = this.page.locator("//input[@id='email']"); 
        this.passwordInput = this.page.locator("//input[@id='password']"); 
        this.loginButton = this.page.locator("//button[@id='gwt-debug-submit']");
    }
}
export class RegisterBorrower {
    constructor(page){
        this.page = page;
        this.emailInput = this.page.locator("//input[@id='email']");
        this.passwordInput = this.page.locator("//input[@id='password']");
        this.nextButton = this.page.locator("//button[@id='gwt-debug-next']");
        this.createNewAccountButton = this.page.locator("//button[3]");
        this.loanPurposeRefinance = this.page.locator("//button[@id='refinance']//div");
        this.refinanceRT = this.page.locator("//button[@id='i-want-lower-ratespayments']//div");
        this.refinanceCashout = this.page.locator("//button[@id='i-want-cash-out']//div");
        this.loanPurposeBuyAHome = this.page.locator('button:has-text("I want to BUY A HOME")');
        this.preApproval = this.page.locator("//button[@id='i-want-a-pre-approval-letter']//div");
        this.purchase = this.page.locator('button:has-text("Seller accepted my offer")');
        this.loginButton = this.page.locator("//button[4]");
        this.autoFillButton = this.page.locator("//a[@id='gwt-debug-__floating_fill-form']");
    }
}
export class FillApplicationManually {
    constructor(page){
        this.page = page;
        this.loanPurposeRefinance = this.page.locator("//button[@id='refinance']//div");
        this.refinanceRT = this.page.locator("//button[@id='i-want-lower-ratespayments']//div");
        this.refinanceCashout = this.page.locator("//button[@id='i-want-cash-out']//div");
        this.loanPurposeBuyAHome = this.page.locator('button:has-text("I want to BUY A HOME")');
        this.preApproval = this.page.locator("//button[@id='i-want-a-pre-approval-letter']//div");
        this.purchase = this.page.locator('button:has-text("Seller accepted my offer")');
        this.loginButton = this.page.locator("//button[4]");
        this.autoFillButton = this.page.locator("//a[@id='gwt-debug-__floating_fill-form']");
        this.skipFillManuallyButton = this.page.locator("//button[@id='skip-and-fill-application-manually']");
        this.saveAndNextButton = this.page.locator("//button[@id='gwt-debug-next']");
        this.addAddressHistory = this.page.locator("(//button[@id='i-classmaterial-icons-unset-iconsaddcirclei-add'])[5]");
    }
}
