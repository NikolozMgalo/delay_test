import BasePage from '../../framework/page/BasePage.js';
import { Label, Button } from '../../framework/elements/index.js';
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js';

class MainPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="description"]', 'Main Page'), 'Main Page');

        //this.clientSideButton = new Label(PreciseTextLocator('Client Side Delay'), 'Client side delay button');

        this.fileLabel = (text) => new Label(PreciseTextLocator(text), 'label');
    }
    
    async clickOnClientSideButton(text) {
        await this.fileLabel(text).click();
    };

};

export default new MainPage();