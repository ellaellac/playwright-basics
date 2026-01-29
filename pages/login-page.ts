import {Page, Locator} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;  
    readonly newUserButton: Locator;
    readonly errorMessage: Locator;


    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.getByRole('textbox', {name: 'UserName'});
        this.passwordInput = page.getByRole('textbox', {name: 'Password'});
        this.loginButton = page.getByRole('button', {name: 'Login'});
        this.newUserButton = page.getByRole('button', {name: 'New User'});
        this.errorMessage = page.getByText('Invalid username or password!');
    }

    async navigateToLoginPage(){
        await this.page.goto('/login');
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click()
    }

    
}