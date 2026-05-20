import {chromium, Page} from "@playwright/test";
export class Utils
{
    page:Page

    constructor(page:Page)
    {

        this.page=page


    }
    public async Launch_browser()
    {
        const browser=await chromium.launch()
        const context=await browser.newContext()
        const page=await context.newPage()
    }

    public async Url(url:string)
    {
        await this.page.goto(url)

    }
   public async reload()
   {
       await this.page.reload()

   }
public async goBack()
   {
       await this.page.goBack()
   }
   public async goForward()
   {
       await this.page.goForward()
   }
   public async Other_browser_page_close()
   {
       await this.page.close()

   }
   public async bring_to_front()
   {
       await this.page.bringToFront()

   }
   
}