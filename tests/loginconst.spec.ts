import { test, expect } from '@playwright/test';

test('Clear existing values and enter new ones for username and password', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  const usernameSelector = page.locator('#username');
  const passwordSelector = page.locator('#password');

  await usernameSelector.fill('rahulshettyacademy');
  await passwordSelector.fill('learning');

   await page.pause();
});
