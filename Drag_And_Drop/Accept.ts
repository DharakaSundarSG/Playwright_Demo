import {Locator, Page} from "@playwright/test";

class Accept {
    page:Page
    ClickAccept:Locator
    Acceptable:Locator
    Not_Acceptable:Locator
    Drop_Here:Locator

    constructor(page:Page)
    {
        this.page=page
        this.ClickAccept=page.locator(`[id="droppableExample-tab-accept"]`)
        this.Acceptable=page.locator(`[id="acceptable"]`)
        this.Not_Acceptable=page.getByText('Not Acceptable')
        this.Drop_Here=page.getByLabel('Accept').locator('div').filter({ hasText: /^Drop here$/ })
    }
}