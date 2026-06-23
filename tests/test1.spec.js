import { test, expect } from '@playwright/test'
import { propertiesReader } from 'properties-reader';


test.beforeEach('Open Url', async ({ page, browserName }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.waitForLoadState('networkidle')
});

test('Select dropdown value', async ({ page, browserName }) => {
 

    await page.locator('#country').selectOption('canada')
});

test('handle alerts', async ({ page, browserName }) => {


    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
});

test.skip('Fill form', async ({ page }) => {
    const props = propertiesReader('tests\test1.spec.js');
    console.log(props.getAllProperties());
    console.log(process.env.testfile)

    //await page.locator('#name').fill()
});