import { test, expect } from '@playwright/test';

test('Login with username and password', async ({ page }) => {


  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  
  await page.locator('#username').click();
  await page.locator('#username').fill('thotaprasanna6');
  await page.locator('#password').click();
  await page.locator('#password').fill('thota123445');
  await page.locator('.checkmark').last().click();
  await page.locator('[id="okayBtn"]').click();
  await page.locator('.text-white.termsText').click();
 //await page.waitForTimeout(3000);
  await page.locator('#signInBtn').click();
  await page.waitForTimeout(3000);

});





















