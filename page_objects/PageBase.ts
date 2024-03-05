import {Page} from 'playwright';

export default class PageBase{
    constructor(protected page: Page) {}

    async navigateTo(url: string){
        await this.page.goto(url);
    }

    async getTitle(){
        return await this.page.title();
    }

    
}
