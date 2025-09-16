import { test, expect } from '@playwright/test';
import { title } from 'process';

test('open page and testing', async ({ page }) => {
  await page.goto('https://automationtesting.co.uk/');
 // expect(page.getByTitle(title).toBeVisible());
   console.log('Page is open ');
  // await page.waitForTimeout(3000);
   await page.locator('[class="toggle"]').click();
   await page.locator('[//*[@id="menu"]/ul/li[2]/a]').click();
   await page.waitForTimeout(3000);
   await expect(page.locator('[class="accordion-header"]').last()).toBeChecked();
   

   
   });




















