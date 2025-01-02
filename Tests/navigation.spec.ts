import { test, expect } from '@playwright/test';
import { timelineData } from '../utils/testData';

test('Navigate to a specific link from Timeline', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://demo.quartexcollections.com/discovery-aids/the-brownings-a-brief-history');

    await page.click(`text="${timelineData.linkText}"`);
    const pages = await page.context().pages();
    const newTab = pages[pages.length - 1];
    await newTab.waitForLoadState();

    await expect(newTab).toHaveURL(timelineData.url);
});
