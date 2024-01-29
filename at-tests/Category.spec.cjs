/* eslint-disable no-undef */
const { test, expect } = require('@playwright/test');

test('check while click category', async ({ page }) => {
 
  await page.goto('http://localhost:5173/Food-Recipe');
  await page.getByRole('link', { name: 'Category' }).click();
  await expect (page. getByRole('heading', { name: 'Category' })).toBeVisible( )
 
});


test('check home button in category', async ({ page }) => {
  await page.goto('http://localhost:5173/Food-Recipe');
  await page.getByRole('link', { name: 'Category' }).click();
  await page.getByRole('link', { name: 'Home' }).nth(1).click();
  await expect (page.getByRole('heading', { name: 'Welcome to Food Recipe' })).toBeVisible ()
});

test('check what appear whil click item in category card', async ({ page }) => {
  await page.goto('http://localhost:5173/Food-Recipe');
  await page.getByRole('link', { name: 'Category' }).click();
  await page.getByRole('link', { name: 'Dessert Dessert Dessert' }).click();
  await expect( page.getByRole('heading', { name: 'Dessert' })).toHaveText('Dessert')
});

test('check which page while click item in category card', async ({ page }) => {
  await page.goto('http://localhost:5173/Food-Recipe');
  await page.getByRole('link', { name: 'Category' }).click();
  await page.getByRole('link', { name: 'Dessert Dessert Dessert' }).click();
  await expect( page.getByRole('heading', { name: 'Dessert' })).toBeVisible()
});

test('check back button in category', async ({ page }) => {
  await page.goto('http://localhost:5173/Food-Recipe');
  await page.getByRole('link', { name: 'Category' }).click();
  await page.getByRole('link', { name: 'Dessert Dessert Dessert' }).click();
  await page.getByRole('link', { name: 'Back' }).click();
  await expect(page.getByRole('heading', { name: 'Category' })).toBeVisible()
});

test('check wich page while i click item card in category meal', async ({ page }) => {
  await page.goto('http://localhost:5173/Food-Recipe');
  await page.getByRole('link', { name: 'Category' }).click();
  await page.getByRole('link', { name: 'Chicken Chicken Chicken' }).click();
  await page.getByRole('link', { name: 'Brown Stew Chicken Brown Stew' }).click();
  await expect(page.getByRole('heading', { name: 'Brown Stew Chicken', exact: true })).toBeVisible()
});

test('check the pic in category meal card ', async ({ page }) => {
  await page.goto('http://localhost:5173/Food-Recipe');
  await page.getByRole('link', { name: 'Category' }).click();
  await page.getByRole('link', { name: 'Chicken Chicken Chicken' }).click();
  await page.getByRole('link', { name: 'Brown Stew Chicken Brown Stew' }).click();
await expect (page.getByRole('heading', { name: 'Brown Stew Chicken', exact: true })).toBeVisible()
});

