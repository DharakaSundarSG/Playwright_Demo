import {expect, Locator, Page} from "@playwright/test";

export class fillFilling
{
    page:Page
    Name:Locator;
    LastName:Locator;
    Email:Locator
    Gender:Locator
    Mobile:Locator
    Date_Of_Birth:Locator
    Subject:Locator
    Hobbies:Locator
    Picture:Locator
    Current_Address:Locator
    State:Locator
    City:Locator
    fillFilling: any;

    constructor(page:Page)
    {
        this.page=page
        this.Name=page.locator(`[id="firstName"]`)
        this.LastName=page.locator(`[id="lastName"]`)
        this.Email=page.locator(`[id="userEmail"]`)
        this.Gender=page.locator(`[value="Female"]`)
        this.Mobile=page.locator(`[id="userNumber"]`)
        this.Date_Of_Birth=page.locator(`[id="dateOfBirthInput"]`)
        this.Subject=page.locator('.subjects-auto-complete__input-container')
        this.Hobbies=page.getByRole('checkbox', { name: 'Sports' })
        this.Picture=page.locator(`[id="uploadPicture"]`)
        this.Current_Address=page.locator(`[id="currentAddress"]`)
        this.State=page.locator(`[id="react-select-3-input"]`)
        this.City=page.locator(`[id="city"]`)
        

    }
 public async form_filling(Name:string,Lastname:string,Email:string,Gender:string,Mobile:string,Date_oF_Birth:string,Subject:string,Hobbies:string,Picture:string,Current_Address:string,State:string,City:string)
 {await this.Mobile.fill(Mobile)

await this.Date_Of_Birth.click()
await this.Date_Of_Birth.fill(Date_oF_Birth)
await this.Date_Of_Birth.press('Enter')

await this.Subject.fill(Subject)
await this.page.keyboard.press('Enter')

   
 }
}