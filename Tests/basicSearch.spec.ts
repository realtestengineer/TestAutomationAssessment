import { test, expect } from '@playwright/test';
import { searchData } from '../utils/testData';

test.describe('Basic Search Functionality', () => {
    test('Valid search displays correct results', async ({ page }) => {
        test.setTimeout(120000);
        await page.goto('https://demo.quartexcollections.com/');
    
        // Use the id or data-testid to target the search input
        await page.fill('#search_input_header', 'Brown'); // Using the id
    
        // Click the search button (assuming there is a button or icon to click)
        // Make sure to inspect the button on the page to get the correct selector
        await page.click('[aria-label="Search"]');
    
        // Wait for the search results page to load
        const resultsPage = await page.waitForSelector('.search-results');
        expect(resultsPage).toBeVisible();
    
        // Optionally, verify that the correct results are displayed
        const resultTitles = await page.$$eval('.search-result-title', (titles) => titles.map((title) => title.textContent));
        expect(resultTitles).toContain('1 April 1875. Browning, Robert to Pollock, Lady.');
    });
    

    test('Search with no results shows message', async ({ page }) => {
        test.setTimeout(120000);  // Set test timeout to ensure page loads fully
        await page.goto('https://demo.quartexcollections.com/');
        
        // Use the correct search input selector
        await page.fill('#search_input_header', searchData[1].term);  
        
        // Click the search button (you can use the correct button's aria-label or another attribute)
        await page.click('[aria-label="Search"]'); 
    
        // Wait for the page to load and the "no results" message to appear
        const message = await page.locator('[data-testid="no-results-message"]');  
        await expect(message).toHaveText(searchData[1].message ?? ''); 
    });    
});