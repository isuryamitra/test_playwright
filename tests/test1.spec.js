import {test,expec} from '@playwright/test'


test.beforeEach('Open Url',async({page,browserName})=>
{
    test.skip(browserName !== 'chromium',
        'This test is not supported in Firefox');
    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.waitForLoadState('networkidle')
});

test('Select dropdown value',async({page,browserName})=>
{
    test.skip(browserName !== 'chromium',
        'This test is not supported in Firefox');

    await page.locator('#country').selectOption('canada')
});

test('handle alerts',async({page,browserName})=>
{
   test.skip(browserName !== 'chromium',
        'This test is not supported in Firefox');

  page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
});