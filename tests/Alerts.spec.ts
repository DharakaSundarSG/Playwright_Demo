import test from "@playwright/test";
import { Alert } from "../pages/Alerts";
import { Utils } from "../pages/Utils";



test("Alert", async({page})=>
{
const util=new Utils(page);
const alert=new Alert(page);

await util.Url("https://demoqa.com/alerts")
await alert.Click_button()

await alert.Accept_or_decline()

await alert.Prompt_declined()
})
