import { Locator, Page } from "@playwright/test";

export class browsing_power_calculator {

    page: Page;
    Anual_income: Locator;
    Scroll_Into_Product: Locator;
    Other_Income:Locator;
    Living_expenses:Locator;
    Other_Loan:Locator;
    total_credit_card_limits:Locator;
    click_on_clear_all:Locator;
    click_start_from_over:Locator;

    constructor(page: Page) {

        this.page = page;

        this.Anual_income = page.locator(`[aria-labelledby="q2q1"]`);

        this.Scroll_Into_Product = page.locator(`[id="q2heading"]`);

        this.Other_Income=page.getByRole('textbox', { name: 'Your annual other income (' });

        this.Living_expenses=page.locator(`[id="expenses"]`);

        this.Other_Loan=page.locator(`[id="homeloans"]`);

        this.total_credit_card_limits=page.locator(`[id="credit"]`);
         
        this.click_on_clear_all=page.locator(`[id="btnBorrowCalculater"]`);

        this.click_start_from_over=page.getByRole('button', { name: 'Start over' })

        
    }

    public async power_calcular(Anual_income: string,Other_Income:string,Living_expenses:string,Other_Loan:string,total_credit_card_limits:string,click_on_clear_all:string,click_start_from_over:string) {

        await this.Anual_income.fill(Anual_income);

        await this.Scroll_Into_Product.scrollIntoViewIfNeeded();

        await this.page.keyboard.press("ArrowDown");

        
        await this.Other_Income.fill(Other_Income)


        await this.Living_expenses.fill(Living_expenses);
        

        await this.Other_Loan.fill(Other_Loan)

        
        await this.total_credit_card_limits.fill(total_credit_card_limits);


        await this.click_on_clear_all.click();
        

        await this.click_start_from_over.click()

    }
}