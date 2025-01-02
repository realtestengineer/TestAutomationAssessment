import { Page } from '@playwright/test';

export async function navigateTo(page: Page, path: string): Promise<void> {
    await page.goto(path);
}
