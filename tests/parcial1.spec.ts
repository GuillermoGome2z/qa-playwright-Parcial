import { test, expect } from '@playwright/test';

test('verifica el titulo de la pagina de login', async ({ page }) => {
	await page.goto('');

	await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice');
});

test('verificar inicio de sesion', async ({ page }) => {
    await page.goto('');

    await page.fill('#username', 'practice');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/secure');
    await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});












