import { test, expect } from '@playwright/test';
import { searchData } from '../utils/testData';

test.describe('Basic Search Functionality', () => {
    test('Valid search displays correct results', async ({ page }) => {
        test.setTimeout(120000);
        await page.goto('https://demo.quartexcollections.com/');
        await page.fill('[data-test="search-input"]', searchData[0].term);
        await page.click('[data-test="search-button"]');
        
        const results = await page.locator('[data-test="search-results"]');
        await expect(results).toContainText(searchData[0].title ?? ''); // Default value if undefined
    });

    test('Search with no results shows message', async ({ page }) => {
        test.setTimeout(120000);
        await page.goto('https://demo.quartexcollections.com/');
        await page.fill('[data-test="search-input"]', searchData[1].term);
        await page.click('[data-test="search-button"]');

        const message = await page.locator('[data-test="no-results-message"]');
        await expect(message).toHaveText(searchData[1].message ?? ''); // Default value if undefined
    });
});
