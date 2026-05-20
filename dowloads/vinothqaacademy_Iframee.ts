import { Locator, Page } from "@playwright/test";
export class vinothqaacademy_Iframee
{
    page:Page
    iframe:Locator
    Role:Locator
    Add_Table:Locator
    Check_the_Row_John:Locator

    constructor(page:Page)
    {
        this.page=page
        this.iframe=page.frameLocator('[name="employeetable"]').locator(`[id="nameInput"]`)
        this.Role=page.frameLocator('[name="employeetable"]').locator('[id="roleInput"]')
        this.Add_Table=page.frameLocator('[name="employeetable"]').locator(`[id="addBtn"]`)
        this.Check_the_Row_John=page.frameLocator('[name="employeetable"]').locator(`[type="checkbox"]`).nth(0)
    }

    public async Formfill(iframe_name:string,Role:string)
    {
     this.iframe.fill(iframe_name)
         
     this.iframe.fill(Role)
    
     
    

}
}