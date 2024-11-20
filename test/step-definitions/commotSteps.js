import Browser from "../../framework/browser/Browser.js";
import MainPage from '../page-objects/MainPage.js';
import { When, Then, Given} from '@wdio/cucumber-framework';
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import AllureReporter from '@wdio/allure-reporter';


Given('Main page is open', async () => {
    AllureReporter.addStep('Main page is open');
    await Browser.openUrl(mainConfig.baseUrl);
});



