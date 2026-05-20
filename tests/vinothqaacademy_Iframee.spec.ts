import { vinothqaacademy_Iframee } from "../dowloads/vinothqaacademy_Iframee";
import test, { Locator, Page } from "@playwright/test";
import { Utils } from "../pages/Utils";

test("Handling_iframe",async ({page})=>
{
await page.pause()
    
 const utils =new Utils(page)
 
 await utils.Url("https://vinothqaacademy.com/iframe/")

 const Iframe=new vinothqaacademy_Iframee(page)

await Iframe.iframe.fill("Dharaka")

await Iframe.Role.fill("634")

await Iframe.Add_Table.click()

await Iframe.Check_the_Row_John.click()








})