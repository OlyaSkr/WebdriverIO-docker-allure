const page = require("./page");

class PricingPage extends page {
    get pricingButton() {
        return $('//span[text()="Pricing"]');
    }
    get elasticSipTrunkingLink() {
        return $('[href*="elastic"] :nth-child(2)>span');
    }
    get tryItFreeLink() {
        return $('//*[text()="Try it free"]');
    }

    get channelsCallsPerSecond() {
        return $('[href*="channels"]')
    }
    get firstNameInput() {
        return $('[name="FirstName"]')
    }
    get lastNameInput() {
        return $('[name="LastName"]')
    }
    get emailInput() {
        return $('[name="Email"]')
    }
    get downloadCsvButton() {
        return $('[type="submit"]')
    }
    get informMessage() {
        return $('//*[contains(text(),"Thank you")]')
    }
   
    async channelsCallsPerSecondClick() {
        await this.channelsCallsPerSecond.click()
    }
    async firstNameInputSeValue(firstname) {
        await this.firstNameInput.setValue(firstname)
    }
    async lastNameInputSeValue(lastname) {
        await this.lastNameInput.setValue(lastname)
    }
    async emailInputSeValue(email) {
        await this.emailInput.setValue(email)
    }
    async downloadCsvButtonClick() {
        await this.downloadCsvButton.click()
    }
    async informMessageIsDisplayed() {
        await this.informMessage.isDisplayed()
    }

   
    get voiceApiLink() {
        return $('[href*="call-control"] :nth-child(2)>span');
    }
    get calculateYourSavingsLink() {
        return $('//*[text()="Calculate your savings."]');
    }
    get messagingApiCheckbox() {
        return $('//*[text()="Messaging API"]');
    }
    get continieButton() {
        return $('//*[text()="Continue"]');
    }
    get smsApiLink() {
        return $('[href*="messaging"] :nth-child(2)>span');
    }
    get moreAboutSmsApiLink() {
        return $('//*[contains(text(),"More about SMS API")]');
    }
    get faxLink() {
        return $('[href*="fax"] :nth-child(2)>span');
    }
    get signUpAndStartBuildingLink() {
        return $('//*[text()="Sign up and start building"]');
    }
    get createFreeAccountLabel() {
        return $('//*[text()="Create a free account"]');
    }

    async pricingButtonMoveTo(element) {
        await element.waitForDisplayed();
        await this.pricingButton.moveTo(element);
    }
    async elasticSipTrunkingLinkClick() {
        await this.elasticSipTrunkingLink.waitForDisplayed();
        await this.elasticSipTrunkingLink.click();
    }
    async tryItFreeLinkScrollIntoView() {
        await this.tryItFreeLink.scrollIntoView();
    }
    async tryItFreeLinkClick() {
        await this.tryItFreeLink.waitForDisplayed();
        await this.tryItFreeLink.click();
    }
    async voiceApiLinkClick() {
        await this.voiceApiLink.waitForDisplayed();
        await this.voiceApiLink.click();
    }
    async calculateYourSavingsLinkClick() {
        await this.calculateYourSavingsLink.waitForDisplayed();
        await this.calculateYourSavingsLink.click();
    }
    async messagingApiCheckboxScrollIntoView() {
        await this.messagingApiCheckbox.scrollIntoView();
    }
    async messagingApiCheckboxClick() {
        await this.messagingApiCheckbox.waitForDisplayed();
        await this.messagingApiCheckbox.click();
    }
    async continieButtonClick() {
        await this.continieButton.click();
    }
    async smsApiLinkClick() {
        await this.smsApiLink.waitForDisplayed();
        await this.smsApiLink.click();
    }
    async moreAboutSmsApiLinkScrollIntoView() {
        await this.moreAboutSmsApiLink.scrollIntoView();
    }
    async moreAboutSmsApiLinkClick() {
        await this.moreAboutSmsApiLink.click();
    }
    async faxLinkClick() {
        await this.faxLink.click();
    }
    async signUpAndStartBuildingLinkScroll() {
        await this.signUpAndStartBuildingLink.scrollIntoView();
    }
    async signUpAndStartBuildingLinkClick() {
        await this.signUpAndStartBuildingLink.click();
    }
    async createFreeAccountLabelIsDisplayed() {
        await this.createFreeAccountLabel.isDisplayed();
    }
}
module.exports = new PricingPage();
