/* eslint-disable no-undef */
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.

 await expect(page.getByRole('heading', { name: 'Welcome to Food Recipe' })).toHaveText('Welcome to Food Recipe');
});




// test('check the slider', async ({ page }) => {
//   await page.goto('http://localhost:5173/');
//   await page.getByRole('img', { name: '...' }).click();

//  await expect (page.getByRole('heading', { name: 'Traditional moroccan food' })).toHaveText('Traditional moroccan food')
// });







