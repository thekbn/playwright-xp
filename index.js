const pw = require('playwright');

(async () =>{
    const browser = await pw.chromium.launch({ headless: false })

const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://youtube.com")

await page.type('input#search', 'duck song')
await page.click('button#search-icon-legacy')

await page.click('a#video-title')
await page.waitForSelector('#search', { state: 'attached' });
await page.waitForLoadState("networkidle")

await browser.close();
})()