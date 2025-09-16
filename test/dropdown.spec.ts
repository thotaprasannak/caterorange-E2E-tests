import { test, expect } from '@playwright/test';

test('Handle dropdown and verify values', async ({ page }) => {
  await page.goto('https://your-site.com'); // Replace with actual URL

  const dropdown = page.locator('#fruit-select');

  // ✅ Select a value from the dropdown
  await dropdown.selectOption('banana');

  // ✅ Verify selected value
  await expect(dropdown).toHaveValue('banana');

  // ✅ Get all option texts and values
  const options = dropdown.locator('option');
  const count = await options.count();

  const values = [];
  for (let i = 0; i < count; i++) {
    const value = await options.nth(i).getAttribute('value');
    const text = await options.nth(i).textContent();
    values.push({ value, text: text?.trim() });
  }

  // ✅ Assert dropdown has expected options
  expect(values).toEqual([
    { value: 'apple', text: 'Apple' },
    { value: 'banana', text: 'Banana' },
    { value: 'cherry', text: 'Cherry' },
  ]);
});
