const axios = require("axios");
const cheerio = require("cheerio");

(async () => {
	// Network request to get the website
	const { data } = await axios.get("https://www.nodetlv.com/");

	// Extract the data using cheerio - supports css selector/xpath and more
	const $ = cheerio.load(data);
	console.log(`The website title is **** ${$("title").text()} ****`);
})();
