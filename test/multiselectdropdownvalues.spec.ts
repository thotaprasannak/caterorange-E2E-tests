
import {test, expect} from '@playwright/test'

test('dropdown',async({page}) =>{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#colors').selectOption(['red','blue'])
await page.waitForTimeout(3000)




})



















