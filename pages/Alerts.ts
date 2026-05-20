import {Locator, Page} from "@playwright/test"



export class Alert
{
    page:Page
    click_me_button:Locator
    confirm_button:Locator
    prompt_button:Locator
    constructor(page:Page)
    {
      this.page=page
      this.click_me_button=page.locator(`[id="alertButton"]`);
      this.confirm_button=page.locator(`[id="confirmButton"]`)
      this.prompt_button=page.locator(`[id="promtButton"]`)
    }
    public async Click_button()
    {
        this.page.once('dialog',async dialog =>{
            await dialog.accept()
        })
        await this.click_me_button.click() 
                              
    }                              
    public async Accept_or_decline()
    {
        this.page.once('dialog',async dialog =>{   // Lisner
            await dialog.dismiss()
        }) 

    await this.confirm_button.click()
        
    }
    public async Prompt_declined()
    {
        this.page.once('dialog',async dialog =>{
            
            await dialog.accept('Hi');
        })

      await this.prompt_button.click();
    }

    }
