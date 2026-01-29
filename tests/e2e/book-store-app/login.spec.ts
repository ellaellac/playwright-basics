import {test, expect} from '@playwright/test';
import {LoginPage} from '../../../pages/login-page';
import {ProfilePage} from '../../../pages/profile-page';
import users from '../../../data/users.json';


test.describe('Book Store App - Login Tests', () => {
    let loginPage: LoginPage;
    let profilePage: ProfilePage;

    test.beforeEach(async({page}) => {
        loginPage = new LoginPage(page);
        profilePage = new ProfilePage(page);
        await loginPage.navigateToLoginPage();
    });

    test('verify login page elements', async() => {
        await expect(loginPage.usernameInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.loginButton).toBeEnabled();
    })

    test('login with valid credentials', async({page}) => {
        await loginPage.login(users.validUser.username, users.validUser.password);
        await expect(page).toHaveURL(/profile/);
        await expect(profilePage.usernameValue).toHaveText(users.validUser.username);
    })

    test('login with invalid credentials', async({page}) => {
        await loginPage.login(users.invalidUser.username, users.invalidUser.password);
        await expect(page).toHaveURL(/login/);
        await expect(loginPage.errorMessage).toBeVisible();
    })

    test('navigate to register page from login page', async({page}) => {
        await loginPage.newUserButton.click();
        await expect(page).toHaveURL(/register/);
    })

    test('logout after successful login', async({page}) => {
        await loginPage.login(users.validUser.username, users.validUser.password);
        await profilePage.logoutButton.click();
        await expect(page).toHaveURL(/login/);
    })
})

