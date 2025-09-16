import { test, expect } from '@playwright/test';

import { test, expect } from '@playwright/test';

test('open page and test accordion', async ({ page }) => {
  // Navigate to homepage
  await page.goto('https://automationtesting.co.uk/');
  console.log('Page is open');

  // Click on the toggle menu (for mobile)
  await page.locator('.toggle').click();

  // Click on the 2nd menu item (Accordion)
  await page.locator('#menu ul li:nth-child(2) a').click();

  // Wait for navigation to complete
  await page.waitForLoadState('networkidle');

  // Optional: wait to visually see it
  await page.waitForTimeout(3000);

  // Assert the last accordion header is visible
  const lastAccordion = page.locator('.accordion-header').last();
  await expect(lastAccordion).toBeVisible();

  // Optional: Click the last accordion header to expand it
  await lastAccordion.click();

  // Optional: Assert the content becomes visible (next sibling)
  const content = lastAccordion.locator('xpath=following-sibling::*[1]');
  await expect(content).toBeVisible();
});
