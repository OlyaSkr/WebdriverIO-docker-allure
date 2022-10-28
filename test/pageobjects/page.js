class Page { 
  get denyCookies() {
    return $('[aria-label="close and deny"]')
  }
    get loginLink() {
        return $('.biNvWx>:nth-child(4)');
    }
   
    async open(path) {
        await browser.url(path);
    }
    async denyCookiesClick() {
      if (await this.denyCookies.isDisplayed()) {
        await this.denyCookies.click();
      }
    }
   async loginLinkClick() {
        await this.loginLink.waitForClickable({ timeout: 3000 });
        await this.loginLink.click();
    }
}
module.exports = Page;