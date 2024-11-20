import { When, Then, Given} from '@wdio/cucumber-framework';
import { assert } from 'chai';
import AllureReporter from '@wdio/allure-reporter';
import ClientSidePage from "../page-objects/ClientSidePage.js";
import testData from '../../testData/testData.json' with { type: 'json' }


const message = 'Data calculated on the client side.'


When('I click on button', async () => {
    AllureReporter.addStep('I click on button');
    await ClientSidePage.clickOnTriggerButton();
});

Then(/^'(.*)' message is displayed$/, { timeout: 20000 }, async (text) => {
    AllureReporter.addStep(`${text} message is displayed`);
    await ClientSidePage.checkForMessage();
    assert.include(await ClientSidePage.getTextFromMessage(), testData.message, 'Message do not match');
});