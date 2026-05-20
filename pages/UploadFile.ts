import {Locator, Page} from "@playwright/test";

export class UploadFile
{
    page:Page

    Dowload:Locator
    ChooseFile:Locator

    constructor(page:Page) {
        this.page=page
        this.Dowload=page.locator(`[id="downloadButton"]`)
        this.ChooseFile=page.locator(`[id="uploadFile"]`)
    }

    public async Upload_file(Filepath:string)
    {
       await this.ChooseFile.setInputFiles(Filepath) 
       await this.page.screenshot({path:'screenshorts//Upload_file.png'})
    }
    public async Dowload_file(File:string)
    {
    const dowload_pomise=this.page.waitForEvent('download')
    await this.Dowload.click();
    const dowload=await dowload_pomise
    await dowload.saveAs(File)
    }


}