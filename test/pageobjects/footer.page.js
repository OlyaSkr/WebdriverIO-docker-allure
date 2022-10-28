const page = require('./page');

class FooterPage extends page {
    get socialLink() {
        return $('//*[text()="Social"]');
    }
    get connectLinkedInLink() {
        return $('//*[text()="Connect on LinkedIn"]');
    }
    get followTwitterLink() {
        return $('//*[text()="Follow on Twitter"]');
    }
    get followFacebookLink() {
        return $('//*[text()="Follow on Facebook"]');
    }
    get productsLabel() {
        return $('//p[text()="Products"]');
    }
    get productsCategoryList() {
        return $$('[data-e2e*="products"]>div>ul>li');
    }
    get productsMenuList() {
        return [
            'Elastic SIP Trunking',
            'Call Control - Voice API',
            'Programmable SMS',
            'Secure Faxing',
            'Wireless - Cellular IoT',
            'Number Lookup',
            'Global Numbers',
            'Verify API',
            'See all Products',
        ];
    }
    get resourcesLabel() {
        return $('//p[text()="Resources"]');
    }
    get resourcesCategoryList() {
        return $$('[data-e2e*="resources"]>div>ul>li');
    }
    get resourcesMenuList() {
        return ['Developer Docs', 'Blog', 'Resource Hub', 'Release Notes'];
    }
    get pricingLabel() {
        return $('//p[text()="Pricing"]');
    }
    get pricingCategoryList() {
        return $$('[data-e2e*="pricing"]>div>ul>li');
    }
    get pricingMenuList() {
        return ['Elastic SIP Trunking Pricing', 'SMS API Pricing', 'Voice API Pricing', 'Wireless Pricing'];
    }
    get companyLabel() {
        return $('//p[text()="Company"]');
    }
    get companyCategoryList() {
        return $$('[data-e2e*="company"]>div>ul>li');
    }
    get companyMenuList() {
        return [
            'About Us',
            'Careers',
            'Data & Privacy',
            'Support Center',
            'Report Abuse',
            'Privacy Policy',
            'Cookie Policy',
            'Acceptable Use Policy',
            'Website Terms and Conditions',
            'Law Enforcement Request',
        ];
    }
    get missionControlLabel() {
        return $('//p[text()="Mission Control"]');
    }
    get missionControlCategoryList() {
        return $$('[data-e2e*="mission_control"]>div>ul>li');
    }
    get missionControlMenuList() {
        return ['Sign up', 'Log In'];
    }

    async socialLinkscrollIntoView() {
        await this.socialLink.scrollIntoView();
    }
    async connectLinkedInLinkClick() {
        await this.connectLinkedInLink.click();
    }
    async followTwitterLinkClick() {
        await this.followTwitterLink.click();
    }
    async followFacebookLinkClick() {
        await this.followFacebookLink.click();
    }
    async productsLabelscrollIntoView() {
        await this.productsLabel.scrollIntoView();
    }
    async productsCategoryListText() {
        const productList = [];
        await this.productsCategoryList.map(async (element) => 
        productList.push(element.getText())
        );
        return await Promise.all(productList);
    }
    async resourcesLabelscrollIntoView() {
        await this.resourcesLabel.scrollIntoView();
    }
    async resourcesCategoryListText() {
        const resourcesList = [];
        await this.resourcesCategoryList.map(async (element) => 
        resourcesList.push(element.getText())
        );
        return await Promise.all(resourcesList);
    }
    async pricingLabelscrollIntoView() {
        await this.pricingLabel.scrollIntoView();
    }
    async pricingCategoryListText() {
        const pricingList = [];
        await this.pricingCategoryList.map(async (element) => 
        pricingList.push(element.getText())
        );
        return await Promise.all(pricingList);
    }
    async companyLabelscrollIntoView() {
        await this.companyLabel.scrollIntoView();
    }
    async companyCategoryListText() {
        const companyList = [];
        await this.companyCategoryList.map(async (element) => 
        companyList.push(element.getText())
        );
        return await Promise.all(companyList);
    }
    async missionControlLabelscrollIntoView() {
        await this.missionControlLabel.scrollIntoView();
    }
    async missionControlCategoryListText() {
        const missionControlList = [];
        await this.missionControlCategoryList.map(async (element) => 
        missionControlList.push(element.getText())
        );
        return await Promise.all(missionControlList);
    }
}

module.exports = new FooterPage();
