import {Page, Locator} from '@playwright/test';

export class ProfilePage{
    readonly page: Page;
    readonly usernameValue: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.usernameValue = page.locator('#userName-value')
        this.logoutButton = page.getByRole('button', {name: 'Log out'});
    }
}