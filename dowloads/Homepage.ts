import {Page, Locator} from "@playwright/test";

export class Homepage{
    page:Page;
    HomePage:Locator
    product:Locator
    constructor(page:Page){
        this.page=page;
        this.HomePage=page.locator(`[data-group="women"]`)
        this.product=page.locator('[class="product-productMetaInfo"]')

    }
 public async HomeP(HomePage:string){

    await this.HomePage.click()


 }
    public async clickOnProduct(prodSelector:number){
        //await this.page.pause()
        await this.page.waitForTimeout(5000)
        const newPagePromise = this.page.waitForEvent('popup'); // Listen for the new page event (synchronous)
        await this.product.nth(prodSelector).click(); //new page
        const newPage= await newPagePromise; // Wait for the new page to open (asynchronous)
        return newPage; 

    }
}