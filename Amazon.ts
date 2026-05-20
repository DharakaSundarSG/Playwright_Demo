import {Locator, Page} from "@playwright/test";

class Amazon
{
    page:Page
    Mobile:Locator

    constructor(page:Page)
    {
        this.page=page
        this.Mobile=page.locator(`[data-csa-c-content-id="nav_cs_mobiles"]`)
    }
}


