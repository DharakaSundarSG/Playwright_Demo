import { expect, Locator, Page } from "@playwright/test";

export class Final_page {

    page: Page;
    Finish: Locator;
    iframe:Locator;

    constructor(page: Page) {

        this.page = page;
        this.Finish = page.locator("#finish");
        this.iframe=page.frameLocator('[id="Disha-Bot"]').locator(`[id="station-textbox"]`);

    } 

    public async Finish_The_Process() {
        await this.Finish.waitFor({state:'visible'})
        await this.Finish.click();
        await this.page.waitForLoadState('load')
        //await this.page.waitForTimeout(2000);        
        //await this.page.waitForURL()
        await this.page.screenshot({
            path: 'screenshots/Final_Finish_page.png',
            fullPage: true
        });
   
        await expect(this.page).toHaveTitle('Swag Labs');



    }
} 

