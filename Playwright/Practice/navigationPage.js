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

const navigationVerticalMainFeature =[
    {
        category :"Main Features",
        item :[
        "a[normalize-space()='GO LIVE']",
        "//a[normalize-space()='Rate alerts']",
        "//li[@class='has-sub expand']//li[3]//a[1]",
        "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='My referral realtors']"]
    },
    {
        category : "Marketing Features",
        item :[
        "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='Facebook Ads']",
        "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='Google reviews']",
        "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='Marketing materials']",
        "//a[normalize-space()='Email drip campaigns']",
        "//li[@class='has-sub expand']//a[@role='tab'][normalize-space()='Mailing lists']",
        "//a[normalize-space()='Lead funnel & Widgets']"]
    }
];

async function navigationFunction(page, navigationList){
    for (let i = 0; i< navigationList.length; i++){
        const menuItem = page.locator(navigationList[i]);
        await page.waitForSelector(navigationList[i], { timeout: 20000 });
        await menuItem.click();
}};

module.exports = {navigationHorizontalList, navigationVerticalList,navigationFunction};