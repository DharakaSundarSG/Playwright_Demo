import {Locator, Page} from "@playwright/test"

export class HomePage
{
    clickOnProduct(arg0: number) {
        throw new Error("Method not implemented.")
    }
    page:Page

    Women_section:Locator

    constructor(page:Page)
    {
        this.page=page

        this.Women_section=page.locator(`[value="Dresses"]`)
    }

    public async Women_part(Women_section:string)
    {
        
       await this.Women_section.click()
    }
}