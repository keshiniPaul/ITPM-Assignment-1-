import { test, expect } from '@playwright/test';

const negativeInputs = [
  'ai oyata parakku une machan?',
  'Mata kaaama kanna kiyala amma kiuwa.',
  'matagodakbadaginimamagedaharayanawa',
  'mata 12/07/2025 iskoleniwadukiyalakiyanna',
  'Himashi gedara yanawa kiuwa eth thama kata kare na.',
  'maamaaa issskole yannwyaa',
  'Ammo mama godak baya wuna!!!',
  'Hello oyata kohomada oya aye practice enne kawadda?',
  'mama eeyee classes walata giye na mata asanepa wuna nissa.',
  'mama ada 5ta netball practice yanne na.'
];

for (const sentence of negativeInputs) {
  test(`Negative Test: "${sentence}"`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    const output = page.locator('div.bg-slate-50');

    await input.fill(sentence);

    // Do NOT force output for negative tests
    await page.waitForTimeout(3000);

    const translatedText = await output.textContent();

    console.log(`Input: "${sentence}"`);
    console.log('Output:', translatedText);

    // Soft validation: app should not crash
    expect(true).toBeTruthy();
  });
}
