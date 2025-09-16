const{test , expect} = require('@playwright/test');
//const { only } = require('node:test');

//testsuite
test.describe('E2E AutomationTesting', ()=> {
    //1st testcases
 test('Verfying the HomePage',async ({page}) =>{

 await page.goto('https://automationtesting.co.uk/')
 await page.pause();
 const validateheading =  await page.locator('[class="logo"]').textContent();
 console.log(validateheading);  //print
 await expect(validateheading).toContain('Automation Testing');   //check
 expect(await page.getByText('Testing Arena')).toBeVisible();
 //validate toggle
 const toggleBtn = page.locator('[class="toggle"]');
 await expect(toggleBtn).toBeEnabled();
 await toggleBtn.click();
 await page.waitForTimeout(2000);
 await expect(page.locator("//*[text()='Menu']")).toBeVisible();
  
 });
 //2nd testcases
 test ('Verfying the Accordion', async({page})=> {
await page.goto('https://automationtesting.co.uk/')
 const toggleBtn = page.locator('[class="toggle"]');
 await expect(toggleBtn).toBeEnabled();
 await toggleBtn.click();
 await page.waitForTimeout(2000);
 await page.getByText('Accordion').click();
 await page.locator('[class="accordion-header"]').nth(0).click();
 await page.pause();
 await page.locator('[class="accordion-header"]').nth(1).click();
 await page.locator('[class="accordion-header"]').nth(2).click();
 });
 //veriflying contact form
 test.only ('Verfying the contactform', async({page})=> {
 await page.goto('https://automationtesting.co.uk/')
 const toggleBtnn = page.locator('[class="toggle"]');
 await expect(toggleBtn).toBeEnabled();
 await toggleBtn.click();
 await page.waitForTimeout(2000);
 await page.getByText('Contact Us Form Test').click();
 await page.pause();
   console.log('Contact Form Test');
await page.getByPlaceholder('[placeholder="First Name"]').click();
await page.getByPlaceholder('[placeholder="Last Name"]').click();
await page.getByPlaceholder('[placeholder="Email Address"]').click();
await page.getByPlaceholder('[class="contact_button"]').click();
 console.log('');







 });   
 });
