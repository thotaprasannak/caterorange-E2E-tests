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
test('Verify the home page title', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class*="text-lg md:text-2xl font-bold "]')).toBeVisible();
});
test('Verify the veg lunch image', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class*="w-full aspect-[4/3]"]').nth(0)).toBeVisible();
});
test('Verify the veg lunch text', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class="text-lg font-bold text-gray-800 mb-2 font-serif"]').nth(0)).toBeVisible();
});
test('Verify the veg lunch price', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class="text-lg font-semibold text-teal-700"]').nth(0)).toBeVisible();
});
test('Verify the veg lunch price up button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class*="w-8 h-8 flex items-center text-xl justify-center "]').nth(0)).toBeVisible();
});
test('Verify the veg lunch price down  button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class*="w-8 h-8 flex items-center justify-center "]').nth(0)).toBeVisible();
});
test('Verify the veg lunch price  button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[type="number"]').nth(0)).toBeVisible();
});
test('Verify the Non - veg lunch image', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class*="w-full aspect-[4/3] object-cover "]').nth(1)).toBeVisible();
});
test('Verify the Non - veg lunch text', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByText('NonVeg Lunch 1PM')).toBeVisible();
});
test('Verify the Non - veg lunch price', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class="text-lg font-semibold text-teal-700"]').nth(1)).toBeVisible();
});
test('Verify the Non -veg lunch price up button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class*="w-8 h-8 flex items-center text-xl"]').nth(1)).toBeVisible();
});
test('Verify the Non -veg lunch price down button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: "-" }).nth(1).click();
});
test('Verify the Non -veg lunch price  button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByPlaceholder('0').nth(1).click();
});
test('Verify the snacks 4pm image', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class*="w-full aspect-[4/3] object-cover "]').nth(2)).toBeVisible();
});
test('Verify the snacks 4pm price ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class="text-lg font-semibold text-teal-700"]').nth(2)).toBeVisible();
});
test('Verify the snacks 4pm price up button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByRole('button', { name: "+" }).nth(2)).toBeVisible();
});
test('Verify the snacks 4pm price down button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByRole('button', { name: "-" }).nth(2)).toBeVisible();
});
test('Verify the snacks 4pm price  button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class*="w-14 h-8 text-center bg-gray-50"]').nth(2)).toBeVisible();
});
test('Verify the veg dinner11pm  image', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class*="w-full aspect-[4/3] object-cover"]').nth(3)).toBeVisible();
});
test('Verify the veg dinner11 pm text', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByText('Veg Dinner 11PM')).toBeVisible();
});
test('Verify the veg dinner 11 pm price', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class*="text-lg font-semibold text-teal-700"]').nth(6)).toBeVisible();
});
test('Verify the veg dinner 11 pm price up button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class*="w-8 h-8 flex items-center "]').nth(10)).toBeVisible();
});
test('Verify the veg dinner 11 pm price down button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class*="w-8 h-8 flex items-center"]').nth(9)).toBeVisible();
});
test('Verify the veg dinner 11 pm  price  button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[type="number"]').nth(3)).toBeVisible();
});
test('Verify the my orders button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByRole(' button', { name: "My Orders" })).toBeVisible();
});
test('Verify the Place New Order button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole(' button', { name: "My Orders" }).click();
        await expect(page.locator('[class*="bg-teal-600 hover:bg-teal-700 "]')).toBeEnabled();
});
test('Verify the Contact Us button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.locator('[class*="hidden md:block text-white py-1"]').nth(1).click();
});
test('Verify the My Cart symbol', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.locator('[class="h-6 w-6 md:h-8 md:w-8 cursor-pointer"]').click();
});
test('Verify the  my orders folder', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.locator('[class="h-9 w-9 cursor-pointer"]').click();
        await page.locator('[class*="w-full p-3 text-left rounded"]').nth(0).click();
});
test('Verify the Contact Us folder', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.locator('[class="h-9 w-9 cursor-pointer"]').click();
        await page.locator('[class*="w-full p-3 text-left rounded"]').nth(1).click();
});
test('Verify the settings folder', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.locator('[class="h-9 w-9 cursor-pointer"]').click();
        await page.locator('[class*="w-full p-3 text-left rounded"]').nth(2).click();
});
test('Verify the settings name field ,gmail field,password,newpassword password field ,', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.locator('[class="h-9 w-9 cursor-pointer"]').click();
        await page.locator('[class*="w-full p-3 text-left rounded"]').nth(2).click();
        await expect(page.locator('[type="text"]')).toBeVisible();
        await expect(page.locator('[type="email"]')).toBeVisible();
        await expect(page.locator('[id="password"]')).toBeVisible();
        await expect(page.locator('[id="confirmPassword"]')).toBeVisible();
        await page.locator('[type="submit"]').click();
});
test('verify the settings new password field eye button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.locator('[class="h-9 w-9 cursor-pointer"]').click();
        await page.locator('[class*="w-full p-3 text-left rounded"]').nth(2).click();
        await page.locator('[id="password"]').click();
        await page.locator('[class="h-5 w-5 text-gray-400"]').nth(0).click();
});
test('verify the settings confirm password field eye button', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.locator('[class="h-9 w-9 cursor-pointer"]').click();
        await page.locator('[class*="w-full p-3 text-left rounded"]').nth(2).click();
        await page.locator('[id="confirmPassword"]').click();
        await page.locator('[class="h-5 w-5 text-gray-400"]').nth(1).click();
});
test('Verify the Corporate Meals', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class="text-lg font-bold mb-4"]').nth(0)).toBeVisible();
});
test('Verify the Delivering high-quality corporate catering solutions tailored to your business needs', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByRole('paragraph', { name: "" }).nth(1)).toBeVisible();
});
test('Verify the Quick Links', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByText('Quick Links')).toBeVisible();
});
test('Verify the Home button link', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByText('Home')).toBeVisible();
});
test('Verify the my orders button link', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByRole('link', { name: "My Orders" }).nth(1)).toBeVisible();
});
test('Verify the Cart link', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByRole('link', { name: "Contact Us" }).nth(0)).toBeVisible();
});
test('Verify the Contact Us link ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class="hover:text-teal-300 transition duration-300"]').nth(3)).toBeVisible();
});
test('verify the Support text ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByText('Support')).toBeVisible();
});
test('Verify the FAQ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByRole('link', { name: "FAQ" })).toBeVisible();
});
test('Verify the  Manage Addresses', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByText('Manage Addresses')).toBeVisible();
});
test('Verify the   Account Settings', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByText('Account Settings')).toBeVisible();
});
test('Verify the Policies', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByText('Policies')).toBeVisible();
});
test('Verify the Shipping Policy button ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.locator('[class="hover:text-teal-300 transition duration-300"]').nth(7)).toBeVisible();
});
test('Verify the Terms & Conditions link', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByText('Terms & Conditions')).toBeVisible();
});
test('Verify the Cancellation & Refunds link', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByText('Cancellation & Refunds')).toBeVisible();
});
test('Verify the Privacy Policy', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByText('Privacy Policy')).toBeVisible();
});
test('Verify the © 2025 Corporate Meals. All rights reserved text ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await expect(page.getByText('© 2025 Corporate Meals. All rights reserved.')).toBeVisible();
});
test('Verify the veg lunch selest date', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(0).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
});
test('Verify the veg lunch clear  button ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(0).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
        await page.getByRole('button', { name: 'Clear' }).first().click();
});
test('verify the  veg lunch add to card button ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(0).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
        await page.getByRole('button', { name: 'Add to Cart' }).nth(0).click();
});
test('Verify the non veg selest date button ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(1).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
});
test('verify the non veg lunch add to card button ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(1).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
        await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();
});
test('Verify the non veg lunch clear button ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(1).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
        await page.getByRole('button', { name: 'Clear' }).nth(1).click();
});
test('Verify the snacks selest date button ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(2).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
});
test('Verify the snacks add to cart button ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(2).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
        await page.getByRole('button', { name: 'Add to Cart' }).nth(2).click();
});
test('Verify the snacks clear button ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(2).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
        await page.getByRole('button', { name: 'Clear' }).nth(2).click();
});
test('Verify the dinner selest date button ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(3).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
});
test('Verify the veg dinner clear button ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(3).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
        await page.getByRole('button', { name: 'Clear' }).nth(3).click();
});
test('Verify the veg dinner  add to cart button ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(3).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
        await page.getByRole('button', { name: 'Add to Cart' }).nth(3).click();
});
test('Verify the snacks date select ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(2).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
        await page.locator('[aria-label*="Choose Thursday"]').nth(4).click();
});
test('Verify the veg lunch date select ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(0).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
        await page.locator('[aria-label*="Choose Thursday"]').nth(1).click();
});
test('Verify the non veg lunch date select ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(1).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
        await page.locator('[aria-label*="Choose Thursday"]').nth(2).click();
});
test('Verify the veg dinner date select ', async ({ page }) => {
        await page.goto("https://app.caterorange.com/");
        const emailField = page.getByPlaceholder('Email');
        await emailField.fill('thotaprasannak@gmail.com');
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('Prasanna@6');
        await page.locator('[type="submit"]').click();
        await page.getByRole('button', { name: '+' }).nth(3).click();
        await page.getByRole('button', { name: 'Select Dates' }).click();
        await page.locator('[aria-label*="Choose Thursday"]').nth(6).click();

});






























































































































