const { test, expect } = require('@playwright/test');
test('testcase1', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const tittle = await page.title();
  console.log(tittle);
  //check:1
  const headerName = await page.getByText('CaterOrange');
  await expect(headerName).toBeVisible();
  //check:2
  const headNames = await headerName.textContent();
  await expect(headNames).toContain('CaterOrange');
  console.log(headNames);
});
test('check email fill', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const emailField = page.getByPlaceholder('Email');
  await expect(emailField).toBeVisible();
  await emailField.click();
});
test('Verify password field', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const passwordField = page.getByPlaceholder('Password');
  await expect(passwordField).toBeVisible();
  await passwordField.click();
});
test('verify sign in button', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await expect(page.locator('[type="submit"]')).toBeVisible();
  await page.locator('[type="submit"]').click();
});
test('Valid sign in', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const emailField = page.getByPlaceholder('Email');
  await emailField.fill('thotaprasannak@gmail.com');
  const passwordField = page.getByPlaceholder('Password');
  await passwordField.fill('Prasanna@6');
  await page.locator('[type="submit"]').click();
});
test('Invalid sign in', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const emailField = page.getByPlaceholder('Email');
  await emailField.fill('thotapra@gmail.com');
  const passwordField = page.getByPlaceholder('Password');
  await passwordField.fill('Prasana@6');
  await page.locator('[type="submit"]').click();
});
test('Blank fields', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const emailField = page.getByPlaceholder('Email');
  await emailField.fill(' ');
  const passwordField = page.getByPlaceholder('Password');
  await passwordField.fill(' ');
  await page.locator('[type="submit"]').click();
});
test('Only username', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const emailField = page.getByPlaceholder('Email');
  await emailField.fill('thotaprasannak@gmail.com');
  await page.locator('[type="submit"]').click();
});
test('Only password', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const passwordField = page.getByPlaceholder('Password');
  await passwordField.fill('Prasanna@6');
  await page.locator('[type="submit"]').click();
});
test('Verify  sign in page title colur', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const Heading = page.getByText('CaterOrange').last();
  await expect(Heading).toHaveCSS('font-weight', '700');
});
test('Verify the sign in page spellings', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const headNames1 = await page.getByText('CaterOrange').textContent();
  await expect(headNames1).toEqual('CaterOrange');
});
test('Verify the password field eye-slash', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const passwordField = page.getByPlaceholder('Password');
  await passwordField.click();
  await expect(page.locator('[type="button"]').last()).toBeVisible();
});
test('Verify the sign in with Google button-label', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await expect(page.locator('iframe[title="Sign in with Google Button"]').contentFrame().getByRole('button', { name: 'Sign in with Google. Opens in' })).toBeVisible()
});
test('verify the slider control-arrow', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await expect(page.locator('[aria-label="next slide / item"]')).toBeVisible();
});
test('verify the control-dots buttons', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await expect(page.locator('[class="dot"]').first()).toBeVisible();
});
test('verify the multiples click on sign in button', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const emailField = page.getByPlaceholder('Email');
  await emailField.fill('thotaprasannak@gmail.com');
  const passwordField = page.getByPlaceholder('Password');
  await passwordField.fill('Prasanna@6');
  await page.locator('[type="submit"]').dblclick();
});
test('Verify the responsiveness of sign in  page', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const emailField = page.getByPlaceholder('Email');
  await emailField.fill('thotaprasannak@gmail.com');
  const passwordField = page.getByPlaceholder('Password');
  await passwordField.fill('Prasanna@6');
  await page.locator('[type="submit"]').click();
});
test('verify the user log out', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const emailField = page.getByPlaceholder('Email');
  await emailField.fill('thotaprasannak@gmail.com');
  const passwordField = page.getByPlaceholder('Password');
  await passwordField.fill('Prasanna@6');
  await page.locator('[type="submit"]').click();
  await page.locator('[class="absolute left-0"]').click();
  await page.locator('[class*="w-full p-3 text-left text-red-600"]').click();
  await page.locator('[class="bg-teal-800 text-white py-2 px-4 rounded"]').click();
});
test('verify the redirective the login page after logout', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  const emailField = page.getByPlaceholder('Email');
  await emailField.fill('thotaprasannak@gmail.com');
  const passwordField = page.getByPlaceholder('Password');
  await passwordField.fill('Prasanna@6');
  await page.locator('[type="submit"]').click();
  await page.locator('[class="absolute left-0"]').click();
  await page.locator('[class="w-full p-3 text-left text-red-600 rounded hover:bg-red-50 transition-colors"]').click();
  await page.locator('[class="bg-teal-800 text-white py-2 px-4 rounded"]').click();
  const headerName1 = await page.getByText('CaterOrange');
  await expect(headerName1).toBeVisible();
});
test('Verify the forgot password', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await expect(page.getByText('Forgot Password?')).toBeVisible();
  await page.getByText('Forgot Password?').click();
});
test('Verify navigation forgot password page', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await page.getByText('Forgot Password?').click();
  await expect(page.getByText('Forgot Password?')).not.toBeVisible();
});
test('Verify  forgot password Email field presence', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await page.getByText('Forgot Password?').click();
  await expect(page.getByText('Forgot Password?')).not.toBeVisible();
  await expect(page.locator('[type="email"]')).toBeVisible();
});
test('Verify forgot password empty email submission', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await page.getByText('Forgot Password?').click();
  await page.locator('[type="email"]').click();
  await page.locator('[type="email"]').fill('    ');
  await page.locator('[type="submit"]').click();
});
test('verify the forgot password verify button is enable', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await page.getByText('Forgot Password?').click();
  await expect(page.locator('[type="submit"]')).toBeEnabled();
});
test('verify the forgot password page  email  blank field ', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await page.getByText('Forgot Password?').click();
  await page.locator('[id="email"]').fill('   ');
  await page.locator('[type="submit"]').click();
});
test('Verify the sign up link', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await expect(page.getByText('Sign Up')).toBeVisible();
});
test('Verify the sinup page title ', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await page.getByText('Sign Up').click();
  const headerName = await page.getByText('Create an account');
  await expect(headerName).toBeVisible();
});
test('Verify the sign up  valid fields', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await page.getByText('Sign Up').click();
  await page.locator('[type="text"]').fill('prasanna');
  await page.locator('[id="phone"]').fill('9966406888')
  await page.locator('[type="email"]').fill('thotaprasannak@gmail.com');
  await page.locator('[id="password"]').fill('Prasanna@6');
  await page.locator('[id="confirmPassword"]').fill('Prasanna@6');
  await page.locator('[type="submit"]').click();
});
test('verify the Do you have an account? log in', async ({ page }) => {
  await page.goto("https://app.caterorange.com/");
  await page.getByText('Sign Up').click();
  await expect(page.locator('[class="text-gray-600 mt-4"]')).toBeVisible();

});


























