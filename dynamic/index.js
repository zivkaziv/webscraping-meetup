const puppeteer = require('puppeteer');
const cheerio = require("cheerio");

(async () => {
	// Open the bowser
	const browser = await puppeteer.launch({headless:false});
	// Open new tab
	const page = await browser.newPage();
	// Network request to get the website
	await page.goto('https://www.nodetlv.com/');

	// Extract the data
	const title = await page.evaluate(() => {
		return document.title
	  });
	console.log(`The website title is **** ${title} ****`);

	// Close the browser
	browser.close();
})();
