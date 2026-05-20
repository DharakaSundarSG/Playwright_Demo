import {Locator, Page} from "@playwright/test";

class Mouse_Hower
{
    page:Page
    playground_click1:Locator
    LinkButton:Locator

    constructor(page:Page)
    {
        this.page=page
        this.playground_click1=page.locator(`[title="Click me"]`)
        this.LinkButton=page.locator('[title="Link Button"]')
    }

}