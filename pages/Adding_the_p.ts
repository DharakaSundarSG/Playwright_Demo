import { Locator, Page } from "@playwright/test";
import { Homepage } from "../dowloads/Homepage";

export class Adding_the_product_details
{
    page:Page;
    Adding_the_size:Locator;
    Pincode:Locator;
    Product1_add_to_Bag:Locator;
    Bag:Locator



    constructor(page:Page)
    {
     this.page=page;
     this.Adding_the_size=page.getByRole('button', { name: 'XL', exact: true });
     this.Pincode=page.locator(`[name="pincode"]`);
     this.Product1_add_to_Bag=page.getByText('ADD TO BAG');
     this.Bag=page.locator(`[class="myntraweb-sprite desktop-iconBag sprites-headerBag"]`)



    }
    public async Selecting_the_size()
    {
     await this.Adding_the_size.click();

    }
    public async enter_pincode(Pincode:string)
    {
    await this.Pincode.fill(Pincode)
    }

    public async Click_add_to_bag()
    {
        await this.Product1_add_to_Bag.click()
    
    }
    public async Click_Bag()
    {
        await this.Bag.click()
    }
}  