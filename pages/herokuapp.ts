import { Locator, Page } from "@playwright/test";

export class herokuapp
{
    page:Page
    Click_JS_Alert:Locator
    Click_Confim_Button:Locator
    Prompt_Alert:Locator


    constructor(page:Page)
    {
        this.page=page

        this.Click_JS_Alert=page.getByRole('button', { name: 'Click for JS Alert' })

        this.Click_Confim_Button=page.getByRole('button', { name: 'Click for JS Confirm' })

        this.Prompt_Alert=page.getByRole('button', { name: 'Click for JS Prompt' })



    }
    public async Click_Alert_button()
    {
        this.page.once('dialog',async dialog =>{
            await dialog.accept()
        })
        await this. Click_JS_Alert.click() 
        
                              
    }   
      public async Click_button_Confim_alert()
    {
        this.page.once('dialog',async dialog =>{
            await dialog.accept()
        })
        await this.Click_Confim_Button.click() 
        
                              
    }    

      public async Click_button_js_Prompt_button_Alert()
    {
        this.page.once('dialog',async dialog =>{
            await dialog.accept()
        })
        await this.Click_Confim_Button.click() 
        
                              
    }    
 
   public async Click_button_Prompt_alert()
    {
        this.page.once('dialog',async dialog =>{
            await dialog.accept()
        })
        await this.Prompt_Alert.click()
        
                              
    }    
    
}