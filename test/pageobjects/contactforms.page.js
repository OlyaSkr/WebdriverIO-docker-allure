const page = require('./page');

class ContactPage extends page {
    get callUsButton() {
        return $('.biNvWx>button');
    }
    get talkToExpertLabel() {
        return $('.bAWpAF');
    }
    get supportCenterButton() {
        return $('.biNvWx>:nth-child(3)');
    }
    get supportCenterLabel() {
        return $('.header__headline');
    }
    get talkToExpertButton() {
        return $('li:nth-child(1)>div>a');
    }
    get talkToProductsExperts() {
        return $('[href*="mailto:sales"]');
    }

    async callUsButtonClick() {
        await this.callUsButton.click();
    }
    async talkToExpertLabelisDisplayed() {
        await this.talkToExpertLabel.isDisplayed();
    }
    async talkToExpertLabelToHaveText(text) {
        await this.expect(talkToExpertLabel).toHaveText(text);
    }
    async supportCenterButtonClick() {
        await this.supportCenterButton.click();
    }
    async talkToExpertButtonClick() {
        await this.talkToExpertButton.click();
    }
}

module.exports = new ContactPage();
