import { expect, Locator, Page } from "@playwright/test";

export class Remove {
  page: Page;
  RemoveProduct: Locator;
  Scroll_Into_Product:Locator;
  Continue_check:Locator

  constructor(page: Page) {
    this.page = page;
    this.RemoveProduct = page.locator('[data-test="remove-sauce-labs-backpack"]')
    this.Scroll_Into_Product=page.locator(`[id="continue-shopping"]`)
    this.Continue_check=page.locator(`[id="checkout"]`)
  }

  public async removeItem() {
    await this.RemoveProduct.click();
  }
 public async Scroll_P() {

    await this.Scroll_Into_Product.scrollIntoViewIfNeeded();

    await expect(this.Continue_check).toBeInViewport()

    await this.page.keyboard.press("ArrowDown");

    await this.Continue_check.click()  

    await expect(this.Continue_check).toBeChecked()
  }
}