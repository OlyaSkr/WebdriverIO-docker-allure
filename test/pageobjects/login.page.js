const page = require('../pageobjects/page');

class LoginPage extends page {
    get businessEmailInput() {
        return $('.eSxLXo>label>div>div>input');
    }
    get passwordInput() {
        return $('[name="password"]');
    }
    get loginButtonSubmit() {
        return $('.eazkBi');
    }
    get homeLink() {
        return $('[id="main_content"] [href="/#/app/home"]');
    }
    get signOutButton() {
        return $('//*[text()="Sign out"]');
    }
    get errorMessage() {
        return $('[class="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]');
    }
    get forgotPassword() {
        return $('[href="/#/login/password-reset"]');
    }
    get emailInput() {
        return $('[name="email"]');
    }
    get resetPaaswordButton() {
        return $('[class*="jGQzza"]>button');
    }
    get informMessage() {
        return $('[class*="bCowrg"]>div');
    }
    get requiredText() {
        return $('//*[text()="Required"]');
    }
   
    async open(path) {
        await super.open(path);
    }
    async login(businessEmail, password) {
        await this.businessEmailInput.setValue(businessEmail);
        await this.passwordInput.setValue(password);
        await this.loginButtonSubmit.click();
    }
    async homeLinkisDisplayed() {
        await this.homeLink.isDisplayed();
    }
    async signOutButtonClick() {
        await this.signOutButton.click();
    }
    async errorMessageIsDisplayed() {
        await this.signOutButton.isDisplayed();
    }
    async forgotPasswordClick() {
        await this.forgotPassword.click();
    }
    async emailInputSetValue(email) {
        await this.emailInput.setValue(email);
    }
    async resetPaaswordButtonClick() {
        await this.resetPaaswordButton.click();
    }
    async informMessageIsDisplayed() {
        await this.informMessage.isDisplayed();
    }
    async requiredTextIsDisplayed() {
        await this.requiredText.isDisplayed();
    } 
}

module.exports = new LoginPage();
