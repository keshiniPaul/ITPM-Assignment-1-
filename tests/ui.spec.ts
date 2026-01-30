import { test, expect } from '@playwright/test';

test('UI Test: Specific translation works', async ({ page }) => {
  // Go to Swift Translator
  await page.goto('https://www.swifttranslator.com/');

  // Select input textarea and output div
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const output = page.locator('div.bg-slate-50');

  // Type the specific text
  await input.fill('mama pansal yanavaa.');

  // Wait and check if the output is exactly as expected
  await expect(output).toHaveText('මම පන්සල් යනවා.', { timeout: 5000 });

  console.log('UI Test Passed: Specific translation is correct');
});
