/* eslint-disable no-undef */
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.

 await expect(page. getByRole('heading', { name: 'Food Recipe' })).toHaveText('Food Recipe');
});

test('check the search to add item of food', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('search for food').click();
  await page.getByPlaceholder('search for food').fill('sushi');
  await expect (page.getByPlaceholder('search for food')).toBeVisible()
});

test('check the search while empty', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('search for food').click();
  await page.getByPlaceholder('search for food').fill('');
  await expect (page.getByPlaceholder('search for food')).toHaveValue('')
});

test('test the search to appear the card ', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('search for food').fill('sushi');
  await page.locator('img').first().click();
  await expect (page.getByRole('img', { name: 'Sushi' })).toBeVisible()
});


test('check the slider', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('img', { name: '...' }).click();

 await expect (page.getByRole('heading', { name: 'Traditional moroccan food' })).toHaveText('Traditional moroccan food')
});

test('check search with different ittem ', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('search for food').click();
  await page.getByPlaceholder('search for food').fill('meat');
  await page.locator('img').first().click();

  await expect (page.getByRole('link', { name: 'Turkey Meatloaf Turkey' })).toBeVisible()
});



// test('test', async ({ page }) => {
//   await page.goto('http://localhost:5173/');
//   await page.getByRole('link', { name: 'Corba Corba Corba Corba' }).click();
//   await expect(page.getByRole('heading', { name: 'ingredient:', exact: true })).toBeVisible()
// });