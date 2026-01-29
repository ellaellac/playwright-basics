import { Page } from "@playwright/test";

export class RegisterPage{
    readonly page;

    constructor(page : Page){
        this.page = page;
    }

    async navigateToRegisterPage(){
        await this.page.goto('/register');
    }
}