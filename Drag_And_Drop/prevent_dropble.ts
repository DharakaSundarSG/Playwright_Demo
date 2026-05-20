import {Locator, Page} from "@playwright/test";

class prevent_drop
{
    page:Page
    prevent_click:Locator
    Drag_me:Locator
    Outer_droppable1:Locator
    Outer_droppable2:Locator

    constructor(page:Page)
    {
        this.page=page
        this.prevent_click=page.getByRole('tab', { name: 'Prevent Propogation' })
        this.Drag_me=page.locator(`[id="dragBox"]`)
        this.Outer_droppable1=page.locator(`[id="notGreedyInnerDropBox"]`)
        this.Outer_droppable2=page.locator(`[id="greedyDropBoxInner"]`)
    }
}