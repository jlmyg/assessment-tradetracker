import {Page, selectors} from "@playwright/test"


export default class LandingPage{

    constructor(public page: Page){

    }

    async inputSearch(search: string){
        await this.page.getByPlaceholder("Search...").fill(search);
    }

    async navigateSignupAdvertiser(){
        await this.page.locator('#id_9postlk68_').click()
    }

    async navigateSignupPublisher(){
        await this.page.locator('#id_8wr6c8tw42').click()
    }

    async navigateContactUs(){
        await this.page.locator('#info-email').click()
    }
}
