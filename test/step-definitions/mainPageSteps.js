import Browser from "../../framework/browser/Browser.js";
import MainPage from '../page-objects/MainPage.js';
import { When, Then, Given} from '@wdio/cucumber-framework';
import { assert } from 'chai';
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import AllureReporter from '@wdio/allure-reporter';
import ClientSidePage from "../page-objects/ClientSidePage.js";


When(/^I click on '(.*)'$/, async (navigator) => {
    AllureReporter.addStep(`I click on ${navigator}`);
    await MainPage.clickOnClientSideButton(navigator);
});

Then('Client side page is open', async () => {
    AllureReporter.addStep('Client side page is open');
    assert.isTrue(await ClientSidePage.isPageOpened(), 'Client Side Delay page not opened');
    AllureReporter.addAttachment('screenshot', await Browser.addScreenshot('screenshot'));
});

