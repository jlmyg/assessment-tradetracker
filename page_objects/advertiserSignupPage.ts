import {Page, expect} from "@playwright/test"


export default class AdvertiserSignup{

    constructor(public page: Page){

    }

    async inputFirstName(firstName: string){
        await this.page.getByPlaceholder("Your first name").fill(firstName);
    }

    async inputLastName(lastName: string){
        await this.page.getByPlaceholder("Your last name").fill(lastName);
    }

    async inputCompanyName(companyName: string){
        await this.page.getByPlaceholder("Name of your company").fill(companyName);
    }

    async inputURL(url: string){
        await this.page.getByPlaceholder("https://").fill(url);
    }

    async selectSalutation(salutation: string){

        if (salutation === 'mr'){
            await this.page.locator(`xpath=//div[@class='radio-icon male']`).click();
        }
        else if (salutation === 'mrs'){
            await this.page.locator(`xpath=//div[@class='radio-icon female']`).click();
        }

    }

    async inputTelephone(phoneNumber: number){
        await this.page.locator("#phone").fill(phoneNumber.toString());
    }

    async inputEmail(email: string){
        await this.page.getByPlaceholder("example@emailaddress.com").fill(email);
        await this.page.getByPlaceholder("example@yourcompany.com").fill(email);
    }

    async optEmailUpdates(choice: boolean){
        if(choice){
            await this.page.locator(`xpath=//span[@class="checkmark"]`).click();
        }
        else{
            // empty block - no click
        }
    }

    async clickDownloadBrochure(){
        await expect(this.page.locator('#download')).toBeEnabled({  timeout: 5000});
    }

    async verifyDownloadBrochure(){

        const button = await this.page.locator(`xpath='//input[@id='download' and not(@class='disabled')]`);
        return button !== null;
    }
}
