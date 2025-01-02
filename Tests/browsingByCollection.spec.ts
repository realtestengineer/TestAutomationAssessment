import { test, expect } from '@playwright/test';
import { collectionData } from '../utils/testData';

test('Browse collections by letter and view results', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://demo.quartexcollections.com/collections');
    await page.click(`[data-test="letter-${collectionData.letter}"]`);

    const header = await page.locator('[data-test="collection-header"]');
    await expect(header).toHaveText(collectionData.collection);

    const results = await page.locator('[data-test="results-count"]');
    await expect(results).toHaveText(String(collectionData.results));
});
