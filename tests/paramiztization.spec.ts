import { Sauce_Lab_Login } from "../dowloads/Sauce_Lab_Login_Page";
import test from "@playwright/test";
import { Utils } from "../pages/Utils";
import users from "..\\tests\\Test_data\\data.json"
const role = process.env.USER_ROLE;
// Filter matching user
const roles = process.env.USER_ROLE?.split(',');

const filteredUsers = users.filter(
    user => roles?.includes(user.Username)
);
for(const user of filteredUsers){

test(`Login with ${user.Username}`,async({page})=>{

    const util =new Utils(page)
    const Loginp=new Sauce_Lab_Login(page)

    await util.Url("https://www.saucedemo.com/")
    await Loginp.Sauce_Lab(user.Username,user.Userpass)

    


})
}
