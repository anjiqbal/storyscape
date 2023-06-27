// import App from './App';
// import {test, expect} from '@jest/globals';
// import {fireEvent, render, screen} from '@testing-library/react';

//Three A's of testing
//Arrange
//Act
//Assert
@ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://storyscape.netlify.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toBeInTheDocument(/StoryScape/);
});

test('does it work on website link', async ({ page }) => {
  await page.goto('https://storyscape.netlify.app/');

  // Click the Upload link.
  await page.getByRole('link', { name: 'Upload' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/Story/);
});
