import BasePage from "../../framework/page/BasePage.js";
import { Label, Button } from '../../framework/elements/index.js';
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class ClientSidePage extends BasePage {
    constructor(){
        super(new Label(PreciseTextLocator('Scenario'), 'Scenario text on Client Side page'), 'CLient side page');

        this.triggerButton = new Button('//*[@id="ajaxButton"]', 'Trigger Button');

        this.successMessage = new Label('//*[@class="bg-success"]', 'success message')
    };

    async clickOnTriggerButton() {
        await this.triggerButton.click();
    };

    async checkForMessage() {
        await this.successMessage.state().waitForExist({timeout: 20000});
    };

    async getTextFromMessage() {
        return this.successMessage.getText();
    };
};

export default new ClientSidePage();