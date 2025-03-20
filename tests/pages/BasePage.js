class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async waitForPageLoad(url) {
        await this.page.waitForPageLoad('networkidle');
    }
}

module.exports = {BasePage};