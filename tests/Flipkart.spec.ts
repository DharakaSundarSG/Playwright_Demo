import { Fipkart } from "../dowloads/Flipkarts";
import {Locator ,Page,expect} from "@playwright/test";
import { Utils } from "../pages/Utils";
import {test} from "@playwright/test";



test("Adding_the_product",async({page})=>{
    const util =new Utils(page);
    const flipkart =new Fipkart(page)

    await util.Url("https://www.flipkart.com/")

    flipkart.Searching_add_to_cart("Latest mobile")
}
)


