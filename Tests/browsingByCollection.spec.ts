import { test, expect } from '@playwright/test';
import { collectionData } from '../utils/testData';

test('Browse collections by letter and view results', async ({ page }) => {
    test.setTimeout(120000);  // Set a longer timeout to ensure the page loads fully

    // Navigate to the collections page
    await page.goto('https://demo.quartexcollections.com/collections');
    
    // Click on the "Explore the Collections" link (adjusted based on the HTML snippet you provided)
    await page.click('a[data-link="true"]'); 

    // Assuming that the collection letter is stored in `collectionData.letter`, use it to click the letter link
    await page.click(`[data-test="letter-${collectionData.letter}"]`);  

    // Wait for the collection header to appear and verify it
    const header = await page.locator('[data-test="collection-header"]');
    await expect(header).toHaveText(collectionData.collection); 

    // Verify the number of results in the collection
    const results = await page.locator('[data-test="results-count"]');
    await expect(results).toHaveText(String(collectionData.results)); 
});
