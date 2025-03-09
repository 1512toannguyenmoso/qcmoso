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
        const menuItem = page.locator(navigationList[i]);
        await page.waitForSelector(navigationList[i], { timeout: 20000 });
        await menuItem.click();
}};

async function navigationToEachSubMenuObVerticalMenu(page, array){
    for (let i=0; i<array.length; i++){
        //click the menu to open sub-menu
        const menuItem = page.locator(array[i].item[0]);
        await page.waitForSelector(array[i].item[0], {timeout: 20000});
        await menuItem.click();

        //access to each sub-menu
        for (let j=1; j <array[i].item.length;j++){
            const menuItem = page.locator(array[i].item[j]);
            await page.waitForSelector(array[i].item[j], {timeout: 20000});
            await menuItem.click()
        }
    };
};
// console.log(navigationVerticalList2[0].item[0]);
// navigationVerticalList2.forEach(feature => {
//     console.log(feature.category);
// });
module.exports = {navigationHorizontalList, navigationVerticalList,navigationFunction, navigationToEachSubMenuObVerticalMenu};