const { generateCaliforniaZipCode } = require("./function");
const {JSDOM} = require("jsdom");

const navigationHorizontalList =[
"//li[@class='d-none d-md-block']//a[@href='##company_dashboard'][normalize-space()='Dashboard']",
"//li[@class='d-none d-md-block']//a[@href='##pricing'][normalize-space()='Pricing Engine']",
"//li[@class='d-none d-md-block']//a[@href='##hot_leads'][normalize-space()='Hot Leads']",
"//li[@class='d-none d-md-block']//a[@href='##leads'][normalize-space()='Leads']",
"//li[@class='d-none d-md-block']//a[@href='##prospects'][normalize-space()='Prospects']",
"//li[@class='d-none d-md-block']//a[@href='##loans'][normalize-space()='Loans']",
"//li[@class='d-none d-md-block']//a[@href='##marketplace'][normalize-space()='Marketplace']"];

const navigationVerticalList=[
    "//span[normalize-space()='Main features']",
    "//span[normalize-space()='Marketing features']",
    "//span[normalize-space()='Miscellaneous features']",
    "//span[normalize-space()='Transactions']",
    "//span[normalize-space()='Rate alerts']",
    "//a[@id='gwt-debug-users']",
    "//a[@id='gwt-debug-associates-to-dos']//span[1]",
    "//a[@id='gwt-debug-admin']",
    "//span[normalize-space()='Service desks']",
    "//a[@id='gwt-debug-customer-relationship']",
    "//span[normalize-space()='Leave management']",
    "//span[normalize-space()='Recruiting']",
    "//span[normalize-space()='LO recruiting']",
    "//span[normalize-space()='Compensation']",
    "//a[@href='##shared_documents']",
    "//a[@id='gwt-debug-marketing']",
    "//span[normalize-space()='My Training Academy']"
];

const navigationVerticalList2 =[
    {
        category :"Main Features",
        item :[
        "//span[normalize-space()='Main features']",
        "a[normalize-space()='GO LIVE']",
        "//a[normalize-space()='Rate alerts']",
        "//li[@class='has-sub expand']//li[3]//a[1]",
        "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='My referral realtors']"]
    },
    {
        category : "Marketing Features",
        item :[
        "//span[normalize-space()='Marketing features']",
        "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='Facebook Ads']",
        "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='Google reviews']",
        "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='Marketing materials']",
        "//a[normalize-space()='Email drip campaigns']",
        "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='Mailing lists']",
        "//a[normalize-space()='Lead funnel & Widgets']"]
    },
    {
        category : "Miscellaneous features",
        item: [
            "//span[normalize-space()='Miscellaneous features']",
            "//a[normalize-space()='Teams / Mentorships / Production Partners']",
            "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='Loan officer referral bonus']",
            "//a[normalize-space()='My Training Academy']",
            "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='My To-dos']",
            "//a[normalize-space()='Event - Open House']",
            "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='Opt-out list']",
            "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='Conversation history']"
        ]
    },
    {
        category: "Transactions",
        item: [
            "//span[normalize-space()='Transactions']",
            "//a[normalize-space()='RE transactions']"
        ]
    },
    {
        category: "Rate Alerts",
        item:[
            "//span[normalize-space()='Rate alerts']"
        ]
    },
    {
        category: "Users",
        item: [
            "//a[@id='gwt-debug-users']",
            "//a[normalize-space()='Company directory']",
            "//a[normalize-space()='User accounts']",
            "//a[normalize-space()='Borrowers']",
            "//a[normalize-space()='Lenders']",
            "//a[normalize-space()='Associates']",
            "//a[normalize-space()='Branches & teams']",
            "//a[normalize-space()='Assembly lines']",
            "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='My referral realtors']",
            "//a[normalize-space()='Realtors']",
            "//a[normalize-space()='Closing agents']",
            "//a[normalize-space()='3rd-party processing companies']",
            "//a[normalize-space()='Vendors']",
            "//a[normalize-space()='Outside users']",
            "//a[normalize-space()='Loan Officers']",
            "//a[normalize-space()='Employers']"
        ]
    }
];

async function navigationFunction(page, navigationList){
    for (let i = 0; i< navigationList.length; i++){
        const selector = navigationList[i];
        const menuItem = page.locator(selector);
        await page.waitForSelector(navigationList[i], { timeout: 20000 });
        await menuItem.click();
}};
//Access to all sub-menu in login view.
async function navigationToEachSubMenuOnbVerticalMenu(page, array, length){
    for (let i=0; i<array.length; i++){
        //click the main menu to open sub-menu
        const selector = array[i].item[0];
        const menuItem = page.locator(selector);
        await page.waitForSelector(array[i].item[0], {timeout: 20000});
        await menuItem.click();

        //access to each sub-menu
        for (let j=1; j <array[i].item.length;j++){
            const selector = array[i].item[j];
            try{
                const menuItem = page.locator(selector);
                await page.waitForSelector(array[i].item[j], {timeout: 20000});
                await menuItem.click()
            } catch(error){
                continue;
            }
        }
    };
};

//Obtain the HTML and find the check box in HTML.
async function getCheckboxInPage(page, divId){
    const divLocator = page.locator(`[id="${divId}"]`);
    // Chờ tối đa 5 giây để phần tử xuất hiện
    await divLocator.waitFor({ state: 'visible', timeout: 15000 });
    const HTMLString = await divLocator.evaluate(el => el.innerHTML);
    const dom = new JSDOM(HTMLString);
    const doc = dom.window.document;

    function isHidden(element) {
        let parent = element.parentElement;
        while (parent) {
            const style = parent.getAttribute('style') || "";
            if (style.includes("display: none")) {
                return true; // Found a hidden parent
            }
            parent = parent.parentElement;
        }
        return false; // No hidden parent found
    }

    const checkboxIds = Array.from(doc.querySelectorAll('input[type="checkbox"]'))
        .filter(checkbox => !isHidden(checkbox)) // Check visibility through ancestors
        .map(checkbox => `//div[@id='${checkbox.id}']`);
    return checkboxIds;
};
async function checkAllBoxInPage(page, checkBoxList) {
    for (let i = 0; i < checkBoxList.length; i++) {
        await page.locator(checkBoxList[i]).waitFor({ state: 'visible', timeout: 5000 });
        await page.locator(checkBoxList[i]).check();
    }
}
module.exports = {navigationHorizontalList, navigationVerticalList,navigationVerticalList2, navigationFunction, navigationToEachSubMenuOnbVerticalMenu,getCheckboxInPage,checkAllBoxInPage};