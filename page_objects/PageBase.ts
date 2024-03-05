import {Page} from 'playwright';

export default class PageBase{
    constructor(protected page: Page) {}

    async navigateTo(url: string){
        await this.page.goto(url);
    }
}
