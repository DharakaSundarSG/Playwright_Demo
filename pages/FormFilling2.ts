import {Locator, Page} from "@playwright/test";

export class FormFilling2
{
    page:Page
    FullName:Locator
    Email:Locator
    Current_Address:Locator
    Perment_Address:Locator

    constructor(page:Page)
    {
        this.page=page
        this.FullName=page.locator(`[id="userName"]`)
        this.Email=page.locator(`[id="userEmail"]`)
        this.Current_Address=page.locator(`[id="currentAddress"]`)
        this.Perment_Address=page.locator(`[id="permanentAddress"]`)
    }
    public async Form_filling(FullName:string,Emails:string,Current_Address:string,Perment_Address:string)
    {
        await this.FullName.fill(FullName)
        await this.Email.fill(Emails)
        await this.Current_Address.fill(Current_Address) 
        await this.Perment_Address.fill(Perment_Address)

    }
    public async other_Actions()
    {
        await this.Perment_Address.clear()
        await this.Current_Address.click()
        await this.Current_Address.press('Control+A')
        await this.Current_Address.press('Control+C')
        await this.Perment_Address.click()
        await this.Perment_Address.press('Control+V')
    }
    public async Input_Reading()
    {
        let value=await this.Perment_Address.inputValue()
        console.log(value)
    }
    
} 

