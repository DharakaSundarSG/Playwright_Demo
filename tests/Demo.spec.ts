import { test } from "@playwright/test";
import { Utils } from "../pages/Utils";
import { AddingToCart } from "../dowloads/AddingToCart";
import { Sauce_Lab_Login } from "../dowloads/Sauce_Lab_Login_Page";
import users from "../tests/Test_data/data.json";

for (const user of users) {

    test(`Login with ${user.Username}`, async ({ page }) => {

        const util = new Utils(page);

        const login_page_Sauce_Lab =
            new Sauce_Lab_Login(page);

        const adding_to_cart =
            new AddingToCart(page);

        await util.Url(
            "https://www.saucedemo.com/"
        );

        await login_page_Sauce_Lab.Sauce_Lab(
            user.Username,
            user.Userpass
        );

        await adding_to_cart.Adding_To_cart();

        

        //await page.pause();

    });

}