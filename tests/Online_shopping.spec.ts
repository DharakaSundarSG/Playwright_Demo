import test, { Locator, Page } from "@playwright/test";
import { Utils } from "../pages/Utils";
import { Adding_the_product_details } from "../pages/Adding_the_p";
import { Homepage } from "../dowloads/Homepage";

test("Shopping",async({page})=>
{
    const util=new Utils(page);

    const Mantra=new Homepage(page);

    await page.pause()            

    await util.Url("https://www.myntra.com/dresses?f=Gender%3Amen%20women%2Cwomen");

    const page1= await Mantra.clickOnProduct(1) 
    
    const Add_product1=new Adding_the_product_details(page1);

    const page2= await Mantra.clickOnProduct(3)

    const Add_product2=new Adding_the_product_details(page2);

    const page5= await Mantra.clickOnProduct(4)
    
    const Add_product3=new Adding_the_product_details(page5);


    await Add_product1.Selecting_the_size();
    await Add_product1.enter_pincode("600001");
    await Add_product1.Click_add_to_bag(); 

    await Add_product2.Selecting_the_size()
    await Add_product2.enter_pincode("600001");
    await Add_product2.Click_add_to_bag(); 

    await Add_product3.Selecting_the_size()
    await Add_product3.enter_pincode("600001");
    await Add_product3.Click_add_to_bag();
    await Add_product3.Click_Bag(); 

    




    
    

    
     
    
    


}
)
