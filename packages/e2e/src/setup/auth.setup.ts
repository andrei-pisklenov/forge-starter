import { expect, test as setup } from '@playwright/test';
import * as fs from 'fs';
import { AUTH_FILE, BASE_URL, USER_NAME, USER_PASSWORD } from '../consts';

/*
  Prerequisites:
    - EN locale
*/
setup('authenticate', async ({ page }) => {
  if (fs.existsSync(AUTH_FILE)) { // check for authFile existed and skip authentication
    setup.skip();
  }

  await page.goto(BASE_URL);

  await expect(page.getByText('Log in to continue')).toBeVisible();

  const usernameField = page.getByPlaceholder('Enter your email');
  await expect(usernameField).toBeVisible();
  await usernameField.fill(USER_NAME);
  await usernameField.press('Enter');

  const passwordField = page.getByPlaceholder('Enter password');
  await expect(passwordField).toBeVisible();
  await passwordField.fill(USER_PASSWORD);
  await passwordField.press('Enter');

  await page.waitForURL(`${BASE_URL}/**`, { timeout: 30000, waitUntil: 'domcontentloaded' });

  await page.context().storageState({ path: AUTH_FILE });
});
