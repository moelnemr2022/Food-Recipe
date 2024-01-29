/* eslint-disable no-undef */
const { test, expect } = require('@playwright/test');

test('check the search to add item of food', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('search for food').click();
  await page.getByPlaceholder('search for food').fill('sushi');
  await expect (page.getByPlaceholder('search for food')).toBeVisible()
});

test('check the search while empty', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('search for food').click();
  await page.locator('.search > img').click();
  await expect (page.getByPlaceholder('search for food')).toHaveValue('')
});

test('test the search to appear the card ', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('search for food').fill('sushi');
  await page.locator('img').first().click();
  await expect (page.getByRole('img', { name: 'Sushi' })).toBeVisible()
});

test('check search with different item ', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByPlaceholder('search for food').click();
  await page.getByPlaceholder('search for food').fill('meat');
  await page.locator('.search > img').click();

  await expect( page.getByRole('heading', { name: 'Turkey Meatloaf', exact: true })).toBeVisible()
});

test('check search with wrong item', async ({ page }) => {

 
  await page.goto('http://localhost:5173/Food-Recipe');
  await page.getByPlaceholder('search for food').click();
  await page.getByPlaceholder('search for food').fill('kkk');
  await page.locator('.search > img').click();
  await expect (page.getByRole('heading', { name: 'No Data Available' })).toBeVisible()
  
});