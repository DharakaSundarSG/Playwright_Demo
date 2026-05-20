import { expect, Locator, Page } from "@playwright/test";

export class Check_out_form_Filling_page {
  page: Page;
  Firstname: Locator;
  LastName: Locator;
  Zipcode: Locator;
  Check_out_continue: Locator;

  constructor(page: Page) {
    this.page = page;

    this.Firstname = page.locator("#first-name");

    this.LastName = page.locator("#last-name");

    this.Zipcode = page.locator("#postal-code");

    this.Check_out_continue = page.locator("#continue");
  }

  public async checkoutFormFilling(
    firstName: string,
    lastName: string,
    zipcode: string
  ) {
    await this.Firstname.fill(firstName);

    await this.LastName.fill(lastName);

    await this.Zipcode.fill(zipcode);

    await this.Check_out_continue.click();

    await this.page.screenshot({path:'screenshorts//Final.png'})

    await expect(this.checkoutFormFilling).toBeDefined()
  }
}