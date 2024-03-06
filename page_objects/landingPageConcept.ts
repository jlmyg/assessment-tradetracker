import {Page, selectors} from "@playwright/test"


export default class LandingPage{

    constructor(public page: Page){

    }

    async inputSearch(search: string){
        await this.page.getByPlaceholder("Search...").fill(search);
    }

    async navigateSignupAdvertiser(){
        await this.page.locator('#id_9postlk68_').click();
    }

    async navigateSignupPublisher(){
        await this.page.locator('#id_8wr6c8tw42').click();
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

    // TODO: louis@bposeats.com
    async navigateFeatures(subpage){
        await this.page.locator('xpath=//section[@class="vc_col-sm-12"]//a[normalize-space()="Features"]').click();

        if (subpage === 'realAttribution'){
            await this.page.locator(`a[name="Real Attribution"]`).click();
        }
        else if (subpage === 'mobileMetrics'){
            await this.page.locator(`a[name="Mobile Metrics"]`).click();
        }
        else if (subpage === 'adMonitor'){
            await this.page.locator(`a[name="Admonitor"]`).click();
        } else{
            console.error('Invalid subpage:', subpage);
        }


    }

}
