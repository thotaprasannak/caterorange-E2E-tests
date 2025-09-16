import { chromium } from 'playwright';

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false }); // headless: false opens the browser UI
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to Google
  await page.goto('https://www.google.com');

  // Wait a few seconds (optional)
  await page.waitForTimeout(3000); // wait 3 seconds

  // Close the browser
  await browser.close();
})();
