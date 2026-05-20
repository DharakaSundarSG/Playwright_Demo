import {expect, Locator, Page}from "@playwright/test"

export class Sauce_Lab_Login
{
page:Page
username:Locator
userPassword:Locator
Login_Button:Locator

constructor(page:Page)
{
    this.page=page 
    this.username=page.locator(`[id="user-name"]`) 
    this.userPassword=page.locator(`[id="password"]`) 
    this.Login_Button=page.locator(`[id="login-button"]`) 

}
public async Sauce_Lab(Username:string,userPassword:string)
{
    
    await this.username.fill(Username)
    await this.userPassword.fill(userPassword)
    await this.Login_Button.click()


    
    
   
    
    }
}  



