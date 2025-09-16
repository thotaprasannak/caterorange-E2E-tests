import { test, expect } from '@playwright/test';

test('Radio button selection test', async ({ page }) => {
  // Navigate to a test page with radio buttons (replace with your URL)
  await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_radio');

  // If using a page with iframe (like W3Schools), switch to the frame
  const frame = page.frameLocator('#iframeResult');

  // Select the 'male' radio button
  await frame.locator('input[type="radio"][value="male"]').check();

  // Expect it to be checked
  await expect(frame.locator('input[type="radio"][value="male"]')).toBeChecked();

  // Optionally check another radio button and validate
  await frame.locator('input[type="radio"][value="female"]').check();
  await expect(frame.locator('input[type="radio"][value="female"]')).toBeChecked();
  await expect(frame.locator('input[type="radio"][value="male"]')).not.toBeChecked();
});
