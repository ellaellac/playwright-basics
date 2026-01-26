import { test, expect } from '@playwright/test';

test('open home page', async ({ page }) => {
  await page.goto('/');
  const loginLogo = page.locator('.login_logo');
  const usernameInput = page.locator('#user-name');
  const passwordInput = page.locator('#password');
  const loginButton = page.locator('#login-button');
  await expect(loginLogo).toBeVisible();
  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await expect(loginButton).toBeVisible();
});


