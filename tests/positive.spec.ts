import { test, expect } from '@playwright/test';

// 24 positive test inputs 
const positiveInputs = [
  'mama mithuran samaga paadam karanna yannam.',
  'mama asaneepa unu nisaa paasalata giya gaman amaaru unaa.',
  'mama ammaa ekka pansal giyaa.',
  'api dhaham paasal yamu.',
  'maGe mithuran eNa thuru maa balaa sitiyaa.',
  'Mama kohomadha heta gedhara yanne?',
  'Oyaage ammata kohomadha akke?',
  'suba raathriyak magee puthee!',
  'ah ah parissamin.',
  'Mata rupiyal 100 dhenna.',
  'Hari hari mn heta oyaata mal gennam.',
  'Mata heta exam ekak thiyenavaa.',
  'mama iyee godak sathutin hitiyee.',
  'karunaakara mama ena thuru inna.',
  'Magee photos okkoma godak lassanata thiyenavaa thanks.',
  'Supiri yaaluvee! Oyaa hondhata karalaa. Magee papers okkoma godak hondhata thiyenavaa.',
  'mama magee ammata thaaththata godak aadharei.',
  'Oyaa mechchara moda kenekdha?',
  'obata godaak sthuuthi maath samaga sitiyaata.',
  'anee mata magee mithuraa samaga sellam karanna onee.',
  'nisal oyaagee vayasa kiiyadha?',
  'heta oyaa apith ekka paadam karanna enna. haamoma oyaa enakan balaagena innavaa.',
  'Magee studies okkoma complete unaata passe mama Japan yanna inne.',
  'oyaa maath ekka iru dhina palli yanna sudhaanam venna.'
];

for (const sentence of positiveInputs) {
  test(`Positive Test: "${sentence}"`, async ({ page }) => {
    // Go to Swift Translator
    await page.goto('https://www.swifttranslator.com/');

    // Type the Singlish text
    const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await input.fill(sentence);

    // Output div
    const output = page.locator('div.bg-slate-50');

    // Wait for output text to appear (up to 5 seconds)
    await expect(output).toHaveText(/.+/, { timeout: 5000 });

    // Get the text
    const translatedText = await output.textContent();

    console.log(`Input: "${sentence}" -> Translated text:`, translatedText);

    // Basic check: the output should not be empty
    expect(translatedText?.length).toBeGreaterThan(0);
  });
}

