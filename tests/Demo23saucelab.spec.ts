import { readExcel } from "../pages/Xcel_Reader";
import { Sauce_Lab_Login } from "../dowloads/Sauce_Lab_Login_Page";
import {test} from "@playwright/test";
import { Utils } from "../pages/Utils";
import path from 'path';
const filePath = path.join(
    process.cwd(),
    'tests',
    'Test_data',
    'Testdata.xlsx'
);
const users:any=readExcel(filePath)
const role = process.env.USER_ROLE || "standard_user"; 

// Filter matching user
let filteredUsers = users;

// If specific users selected
if (role && role !== 'all') {

    const roles = role.split(',');

    filteredUsers = users.filter(
        (user: any) => roles.includes(user.Username)
    );
}
for(const user of filteredUsers){

test(`Login with ${user.Username}`,async({page})=>{

    const util =new Utils(page)
    const Loginp=new Sauce_Lab_Login(page)

    await util.Url("https://www.saucedemo.com/")
    await Loginp.Sauce_Lab(user.Username,user.Userpass)

    


})
}
