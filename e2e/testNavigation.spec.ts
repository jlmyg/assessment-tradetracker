// This file contains navigation validations for

import { test, expect } from "@playwright/test";
import LandingPage from "../page_objects/landingPageConcept"

test("contact us navigation", async ({ page, baseURL }) => {
    test.fixme();
    // currently contact us input form is bugged and does not display
    const landingpage = new LandingPage(page);
    await page.goto(`${baseURL}`);

    await landingpage.navigateContactUs();

})

test("sign up as advertiser navigation", async ({ page, baseURL }) => {

    const landingpage = new LandingPage(page);
    await page.goto(`${baseURL}`);

    await landingpage.navigateSignupAdvertiser();

    await expect(page.getByRole('heading', {name: 'Download Brochure'})).toBeVisible({timeout: 10000});

    expect(page.url()).toBe('https://merchant.tradetracker.com/portal/advertiserBrochure?loc=en_GB')


})

test("sign up as publisher navigation", async ({ page, baseURL }) => {

    const landingpage = new LandingPage(page);
    await page.goto(`${baseURL}`);

    await landingpage.navigateSignupPublisher();

    await expect(page.getByRole('heading', {name: 'Sign up as a Publisher'})).toBeVisible({timeout: 10000});

    expect(page.url()).toBe('https://affiliate.tradetracker.com/signup/step1?loc=en_GB')


})

test("advertisers subpage navigation", async ({ page, baseURL }) => {

    const landingpage = new LandingPage(page);
    await page.goto(`${baseURL}`);

    await landingpage.navigateAdvertisers();

    await expect(page.getByRole('heading', {name: 'PAY ONLY FOR PERFORMANCE'})).toBeVisible({timeout: 10000});

    expect(page.url()).toBe('https://tradetracker.com/advertisers/')


})

test("publishers subpage navigation", async ({ page, baseURL }) => {

    const landingpage = new LandingPage(page);
    await page.goto(`${baseURL}`);

    await landingpage.navigatePublishers();

    await expect(page.getByRole('heading', {name: 'Start monetising your content today'})).toBeVisible({timeout: 10000});

    expect(page.url()).toBe('https://tradetracker.com/gb/publishers/')


})

test("about affiliate marketing subpage navigation", async ({ page, baseURL }) => {

    const landingpage = new LandingPage(page);
    await page.goto(`${baseURL}`);

    await landingpage.navigateAboutAffiliateMarketing();

    await expect(page.getByRole('heading', {name: 'Affiliate marketing explained'})).toBeVisible({timeout: 10000});

    expect(page.url()).toBe('https://tradetracker.com/gb/about-affiliate-marketing/')


})
