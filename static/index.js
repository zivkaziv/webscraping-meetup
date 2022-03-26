const axios = require("axios");
const cheerio = require("cheerio");

(async () => {
	const { data } = await axios.get("https://www.nodetlv.com/");
	const $ = cheerio.load(data);
	console.log(`The website title is **** ${$("title").text()} ****`);
})();
