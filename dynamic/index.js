const puppeteer = require('puppeteer');
const cheerio = require("cheerio");

(async () => {
	const browser = await puppeteer.launch({headless:false});
	const page = await browser.newPage();
	await page.goto('https://www.nodetlv.com/');
	const title = await page.evaluate(() => {
		return document.title
	  });
	console.log(`The website title is **** ${title} ****`);
	browser.close();
})();
