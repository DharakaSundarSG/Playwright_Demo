import { expect, Locator, Page } from "@playwright/test";

export class AddingToCart {

    page: Page
    Add_Product1: Locator
    Add_Product2: Locator
    Add_Product3: Locator
    Add_to_cart:Locator;

    constructor(page: Page) {

        this.page = page

        this.Add_Product1 = page
            .locator('.btn_inventory')
            .nth(0)

        this.Add_Product2 = page
            .locator('.btn_inventory')
            .nth(1)

              this.Add_Product3 = page
            .locator('.btn_inventory')
            .nth(2)

            this.Add_to_cart=page.locator(`[id="shopping_cart_container"]`)
            
    }

    public async Adding_To_cart() {

        await this.Add_Product1.click()

        await this.Add_Product2.click()

        await this.Add_Product3.click()

        await expect(this.Add_to_cart).toBeVisible()
        
        await this.Add_to_cart.click()

    
        




    }
}