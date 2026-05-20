import {Locator, Page} from "@playwright/test";

export class Buttons
{
    page:Page
    Doubleclick:Locator
    Rightclick:Locator
    Click_Me:Locator

    constructor(page:Page) {
        this.page=page;
        this.Doubleclick=page.locator(`[id="doubleClickBtn"]`)
        this.Rightclick=page.locator(`[id="rightClickBtn"]`)
        this.Click_Me=page.getByRole('button', { name: 'Click Me', exact: true })

    }
    public async Ui_actions()
    {
        await this.Click_Me.click()
        await this.Click_Me.click({clickCount:3})
        await this.Doubleclick.dblclick()
        await this.Rightclick.click({button:'right'})

    }


}

