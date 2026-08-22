import { test, expect } from '@playwright/test';

test('verifica el titulo de la pagina de login', async ({ page }) => {
	await page.goto('');

	await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice');
});








