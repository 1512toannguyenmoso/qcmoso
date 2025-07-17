export class QuoteWidgetCompany {
    constructor(page) {
        this.page = page;
        this.quoteWidgetCompanyQm = this.page.locator("(//a[normalize-space()='FULL DOC'])[1]");
        this.quoteWidgetCompanyNonQm = this.page.locator("(//a[normalize-space()='NO-INCOME DOC'])[1]");
        this.quoteWidgetCompanyGetQuoteButton = this.page.locator("(//button[normalize-space()='Get Quote'])[1]");
        this.preTaxIncomeDropdown = this.page.locator("//span[@class='select2 select2-container select2-container--default select2-container--above select2-container--focus']//span[@role='combobox']");
        this.valuePreTaxIncome = this.page.locator("'<= $96,150 (<=50% of AMI)'");
        this.showRateButton = this.page.locator("(//button[normalize-space()='Show Rates'])[1]");
    }
}

export class QuoteWidgetLoanOfficerPage {
    constructor(page) {
        this.page = page;
        this.quoteWidgetLoanOfficerQm = this.page.locator("(//a[normalize-space()='FULL DOC'])[1]");
        this.quoteWidgetLoanOfficerNonQm = this.page.locator("(//a[normalize-space()='NO-INCOME DOC'])[1]");
        this.quoteWidgetLoanOfficerGetQuoteButton = this.page.locator("(//button[normalize-space()='Get Quote'])[1]");
    }
}

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = this.page.locator("//input[@id='email']");
        this.passwordInput = this.page.locator("//input[@id='password']");
        this.loginButton = this.page.locator("//button[@id='gwt-debug-submit']");
    }
}

export class RegisterBorrower {
    constructor(page) {
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
    constructor(page) {
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
