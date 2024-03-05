import { Page } from 'playwright';
import { LandingPageLocators } from '../constants/LandingPageElements';
import PageBase from './PageBase';

export default class LandingPage extends PageBase {
    constructor(page: Page){
        super(page);
    }

    async clickAdvertiserSignUp(){
        await this.page.click(LandingPageLocators.ADVERTISER_SIGN_UP_BUTTON)
    }
}
