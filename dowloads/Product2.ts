import {Page, Locator} from "@playwright/test";

export class Product2{
    page:Page;
    product2:Locator;

    constructor(page:Page){
     this.page=page;
      this.product2=page.locator('[class="product-productMetaInfo"]')

    }
}