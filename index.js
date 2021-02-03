require('dotenv').config()
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    ignoreDefaultArgs: ['--disable-extensions'],
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080',],
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');


  const searchBox = await page.$$('[name=q]');

  console.log(searchBox)
  
  await page.screenshot({path: 'teste1.png'});

  await browser.close();
})();
