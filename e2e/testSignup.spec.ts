import { test, expect } from "@playwright/test";
import LandingPage from "../page_objects/landingPage"
import AdvertiserSignup from "../page_objects/advertiserSignupPage"

const firstName: string = 'Juan';
const lastName: string = 'de la Cruz';
const companyName: string = 'Example Company';
const url: string = 'domain.com';
const salutation: string = 'mr';
const telephone: number = 9153305732;
const email: string = 'email@domain.com';
const newsletteroption: boolean = true;


test("valid advertiser signup", async ({ page, baseURL }) => {
    const landingpage = new LandingPage(page);
    const advertisersignuppage = new AdvertiserSignup(page);
    await page.goto(`${baseURL}`);

    await landingpage.navigateSignupAdvertiser();
    await advertisersignuppage.inputFirstName(firstName);
    await advertisersignuppage.inputLastName(lastName);
    await advertisersignuppage.inputCompanyName(companyName);
    await advertisersignuppage.inputURL(url);
    await advertisersignuppage.selectSalutation(salutation);
    await advertisersignuppage.inputTelephone(telephone);
    await advertisersignuppage.inputEmail(email);
    await advertisersignuppage.optEmailUpdates(newsletteroption);

    // await advertisersignuppage.clickDownloadBrochure(); - disabled to avoid accidental clicks


    const isDownloadButtonEnabled = await advertisersignuppage.verifyDownloadBrochure();
    // expect(page.locator('#download')).toBeEnabled({timeout: 5000}); - cannot make it work properly
    expect(isDownloadButtonEnabled).toBe(true);

})
