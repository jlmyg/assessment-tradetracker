import {Page, selectors} from "@playwright/test"


export default class LandingPage{

    constructor(public page: Page){

    }

    async inputSearch(search: string){
        await this.page.getByPlaceholder("Search...").fill(search);
    }

    async navigateSignupAdvertiser(){
        await this.page.locator('xpath=//a[normalize-space()="Sign up as Advertiser"]').click();
    }

    async navigateSignupPublisher(){
        await this.page.locator('xpath=//a[normalize-space()="Sign up as Publisher"]').click();
    }

    async navigateContactUs(){
        await this.page.locator('#info-email').click();
    }

    async navigateAdvertisers(){
        await this.page.locator('xpath=//section[@class="vc_col-sm-12"]//a[normalize-space()="Advertisers"]').click();
    }

    async navigatePublishers(){
        await this.page.locator('xpath=//section[@class="vc_col-sm-12"]//a[normalize-space()="Publishers"]').click();
    }

    async navigateAboutAffiliateMarketing(){
        await this.page.locator('xpath=//section[@class="vc_col-sm-12"]//a[normalize-space()="About Affiliate Marketing"]').click();
    }

    async navigateFeatures(subpage){
        await this.page.locator('xpath=//section[@class="vc_col-sm-12"]//a[normalize-space()="Features"]').hover();

        if (subpage === 'realAttribution'){
            await this.page.locator(`xpath=//section[@class='vc_col-sm-12']//a[normalize-space()='Real Attribution']`).hover();
            await this.page.locator(`xpath=//section[@class='vc_col-sm-12']//a[normalize-space()='Real Attribution']`).click();
        }
        else if (subpage === 'mobileMetrics'){
            await this.page.locator(`xpath=//section[@class='vc_col-sm-12']//a[normalize-space()='Mobile Metrics']`).hover();
            await this.page.locator(`xpath=//section[@class='vc_col-sm-12']//a[normalize-space()='Mobile Metrics']`).click();
        }
        else if (subpage === 'adMonitor'){
            await this.page.locator(`xpath=//section[@class='vc_col-sm-12']//a[normalize-space()='Admonitor']`).hover();
            await this.page.locator(`xpath=//section[@class='vc_col-sm-12']//a[normalize-space()='Admonitor']`).click();
        } else{
            console.error('Invalid subpage:', subpage);
        }


    }

}
