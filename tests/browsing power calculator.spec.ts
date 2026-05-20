import test, { Locator, Page } from "@playwright/test";
import { Utils } from "../pages/Utils";
import { browsing_power_calculator } from "../pages/browsing power calculator";



test("Adding the details of person",async({page})=>
{
    await page.pause()
    const util =new Utils(page);
    const Calculator=new browsing_power_calculator(page);
    
    await util.Url("https://www.anz.com.au/personal/home-loans/calculators-tools/borrowing-power-calculator/")
    
    
    await Calculator.power_calcular("100,000","10,000","2000","100","10,000","click_on_clear_all","click_start_from_over");




    
    

})