const {expect} = require('@playwright/test');
const {chromium} = require('playwright');
import helpers_function from '../utils/helpers.js';
import datatest from '../utils/datatest.js';


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
    await this.page.waitForLoadState('domcontentloaded'); 
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
    this.loanApplication_Locator = this.page.locator("//a[normalize-space()='Loan Application']");
    this.userNameRegister_Locator = this.page.locator("//input[@id='email']");
    this.passwordRegister_Locator = this.page.locator("//input[@id='password']");
    this.createNewAccount_Locator = this.page.locator("//button[3]");
    this.nextButton_Locator = this.page.locator("//button[@id='gwt-debug-next']");
  };
  async CreatePreApprovalLetter(username,password){
    await this.loanApplication_Locator.click();
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
    await this.loanApplication_Locator.click();
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
    await this.loanApplication_Locator.click();
    await this.page.waitForLoadState('networkidle');
    await this.refinance_Locator.click();
    await this.page.waitForLoadState('networkidle');
    await this.refinanceRatePayment_Locator.click();
    await this.userNameRegister_Locator.fill(username);
    await this.nextButton_Locator.click();
    await this.passwordRegister_Locator.fill(password);
    await this.createNewAccount_Locator.click();
  };
  async CreateRefinanceCashOutLoan(username,password){
    await this.loanApplication_Locator.click();
    await this.page.waitForLoadState('networkidle');
    await this.refinance_Locator.click();
    await this.page.waitForLoadState('networkidle');
    await this.refinanceCashOut_Locator.click();
    await this.userNameRegister_Locator.fill(username);
    await this.nextButton_Locator.click();
    await this.passwordRegister_Locator.fill(password);
    await this.createNewAccount_Locator.click();
  };
};
export class BorrowerPortal{
  constructor(page){
    this.page = page;
    this.startApplication_Locator = this.page.locator("//i[normalize-space()='work']");
    this.activeApplication_Locator = this.page.locator("//span[normalize-space()='Active application']");
    this.todo_Locator = this.page.locator("//span[normalize-space()='To-dos']");
    this.quote_Locator = this.page.locator("//span[normalize-space()='Quote']");
    this.allTransactions_Locator = this.page.locator("//span[normalize-space()='All transactions']");
    this.myProfile_Locator = this.page.locator("//span[@class='d-none d-md-inline']");
    this.notification_Locator = this.page.locator("//i[normalize-space()='notifications']");
  };
};
export class ApplicationForm1003{
  constructor(page){
    this.page = page;
    this.helpers_function = helpers_function;
    //Borrower portal, Start new application tab
    this.startNewApplication_Locator = this.page.locator("//i[normalize-space()='work']");
    this.buyAHome_Locator = this.page.locator('button:has-text("I want to BUY A HOME")');
    this.preapprovalLetter_Locator = this.page.locator('button:has-text("I want a pre-approval letter")');
    this.sellerAcceptedMyOffer = this.page.locator('button:has-text("Seller accepted my offer")');
    this.refinance_Locator = this.page.locator('button:has-text("I want to REFINANCE")');
    this.refinanceRatePayment_Locator = this.page.locator('button:has-text("I want lower rates/payments")');
    this.refinanceCashOut_Locator = this.page.locator('button:has-text("I want cash out")');
    //AI Application
    this.SkipAndFillApplicationManually_Locator = this.page.locator("//button[@id='skip-and-fill-application-manually']");
    this.AITermofServiceCheckBox = ['input[name="agree"]'];
    //Generral tab
    this.changeLenderButton_Locator = this.page.locator("//button[@id='change-lender-button']");
    this.correspondentLenderButton_Locator = this.page.locator("//button[normalize-space()='Correspondent']");
    this.wholesaleLenderButton_Locator = this.page.locator("//button[normalize-space()='Wholesale']");
    this.lenderNameButton_Locator = this.page.locator("//span[@id='select2-lender-container']");
    this.reasonsForChangeLender_Locator = this.page.locator("//textarea[@id='reason']");
    this.ticketOwner_Locator = this.page.locator("//span[@id='select2-owner-container']");
    this.upLoadUploadedTicketDocs_Locator = this.page.locator("//div[@class='GEVLLT2CMT progress form-control']");
    this.submitButton_Locator = this.page.locator("//div[@class='modal-footer cleafix flex-wrap']//button[@id='gwt-debug-submit']");
    this.changeLenderFee_Locator = this.page.locator("//input[@id='change_lender_fee']");
    this.lenderPaidCompensation_Locator = this.page.locator("//button[normalize-space()='Lender paid']");
    this.borrowerPaidCompensation_Locator = this.page.locator("//button[normalize-space()='Borrower paid']");
    this.lenderPaidPercentage_Locator = this.page.locator("//input[@id='lender_paid_percentage']");
    this.borrowerPaidPercentage_Locator = this.page.locator("//input[@id='borrower_paid_percentage']");
    this.borrowerPaidPercentageInputAmount_Locator = this.page.locator("//button[@id='i-classmaterial-icons-unset-iconsediti-amount']");
    this.creditReportFee_Locator = this.page.locator("//input[@id='credit_report_fee']");
    this.processingFeeChargedToBorrower_Locator = this.page.locator("//input[@id='processing_fee_paid_by_borrower']");
    this.commissionNotes_Locator = this.page.locator("//input[@id='commission_notes']");
    this.loanNumber_Locator = this.page.locator("//input[@id='loan_number']");
    this.lenderURL_Locator = this.page.locator("//input[@id='lender_url']");
    this.loanStory_Locator = this.page.locator("//textarea[@id='lender_reason']");
    this.loanSource_Locator = this.page.locator("//span[@id='select2-loan_source-container']");
    this.branchName_Locator = this.page.locator("//span[@id='select2-branch-container']");
    this.mainLoanOfficer_Locator = this.page.locator("//span[@class='twitter-typeahead']//input[@id='agent']");
    this.additionalLoanOfficer_Locator = this.page.locator("//span[@class='twitter-typeahead']//input[@id='agent']");
    this.sharedCommissionSplit_Locator = this.page.locator("//input[@id='shared_commission_split']");
    this.flatAmount_Locator = this.page.locator("//input[@id='flat_amount']");
    this.referringAssociate_Locator = this.page.locator("//input[@id='referring_associate']");
    this.loanOfficerAssistant_Locator = this.page.locator("//input[@id='originator_assistant']");
    this.useLoanCoordinatorservice_Locator = this.page.locator("//div[@class='tt-dataset tt-dataset-6']//div[@class='tt-suggestion tt-selectable']");
    this.loanCoordinator_Locator = this.page.locator("//input[@id='setup_specialist']");
    this.disclosureSpecialist_Locator = this.page.locator("//div[@id='setup_specialist']//div[@class='tt-menu']");
    this.useAssemblyLineProcessing_Locator = this.page.locator("//div[@id='use_assembly_line']//button[@name='Yes'][normalize-space()='Yes']");;
    this.notUseAssemblyLineProcessing_Locator = this.page.locator("//div[@id='use_assembly_line']//button[@name='No'][normalize-space()='No']");
    this.loanProcessingTeam_Locator = this.page.locator("//span[@id='select2-processing_team-container']");
    this.loanProcessor_Locator = this.page.locator("//span[@id='select2-processing_team-container']");
    this.underwriter_Locator = this.page.locator("//input[@id='underwriter']");
    this.realtorSpecialist_Locator = this.page.locator("//input[@id='realtor_specialist']");
    this.priority_Locator = this.page.locator("//span[@class='select2 select2-container select2-container--default select2-container--focus']//span[@id='select2-priority-container']");
    this.howDidYouHearAboutUs_Locator = this.page.locator("//span[@id='select2-referrer_linked_media-container']");
    this.preferredLanguage_Locator = this.page.locator("//span[@class='select2 select2-container select2-container--default select2-container--focus']//input[@role='textbox']");
    this.loanAdditionalAdjustment_Locator = this.page.locator("//input[@id='loan_additional_adjustment']");
    this.discountCode_Locator = this.page.locator("//input[@id='code']");
    //Loan Infor tab
    this.nextButton_Locator = this.page.locator("//button[@id='next']");
    this.saveAndNextButton_Locator = this.page.locator("//button[@id='gwt-debug-next']");
    this.abc_Locator = this.page.locator("//input[@id='abc']");
  }
}
