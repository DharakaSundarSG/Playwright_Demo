import {Locator, Page} from "@playwright/test";

class Simple
{
    page:Page
    drag_me:Locator
    Drop_here:Locator

    constructor(page:Page) {
        this.page=page
        this.drag_me=page.locator(`[id="draggable"]`)
        this.Drop_here=page.locator(`[id='simpleDropContainer'] [id='droppable']`)
    }
    public async Dropable()
    {
        await this.drag_me.dragTo(this.Drop_here)
    }
}
