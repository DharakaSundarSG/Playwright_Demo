import{Locator ,Page , expect} from "@playwright/test"


export class Fipkart
{
    page:Page;

    Search_Product:Locator; 

    constructor(page:Page)
    {
        this.page=page

        this.Search_Product=page.locator(`[title="Search for Products, Brands and More"]`)

    }

    public async Searching_add_to_cart(Search_Product:string)
    {
        this.Search_Product.fill(Search_Product)

        this.page.screenshot({path:"Flipkart_screenshort/searching_product.png"})
    }
}