import { test, expect } from '@playwright/test';

test('Validate PDF Downlaod', async ({ page }) => {
  await page.goto('https://samplepdf.org//');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sample PDF Download/);
});
