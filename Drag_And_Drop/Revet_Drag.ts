import {Locator, Page} from "@playwright/test";

class Revet_Drag
{
    page:Page
    Click_Revet:Locator
    Will_Revet:Locator
    Not_Revet:Locator
    drop_here:Locator

    constructor(page:Page)
    {
        this.page=page
        this.Click_Revet=page.getByRole('tab', { name: 'Revert Draggable' })
        this.Will_Revet=page.locator(`[id="revertable"]`)
        this.Not_Revet=page.locator(`[id="notRevertable"]`)
        this.drop_here=page.locator(`[id='simpleDropContainer'] [id='droppable']`)
    }
}