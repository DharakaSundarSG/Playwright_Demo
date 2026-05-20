import test from "@playwright/test";
import { herokuapp } from "../pages/herokuapp";
import { Utils } from "../pages/Utils";


test("Clicking alert button",async({page})=>{
    
      const util =new Utils(page);

      const Alert22=new herokuapp(page);

      await util.Url("https://the-internet.herokuapp.com/javascript_alerts")
      
      await Alert22.Click_Alert_button()

      await Alert22.Click_button_Confim_alert()

      await Alert22.Click_button_Prompt_alert()
})
