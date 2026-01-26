import { test, expect } from '@playwright/test';

test('login with valid user', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
})
