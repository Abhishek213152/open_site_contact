const puppeteer = require("puppeteer");

const siteUrl = "https://contact-management-utxi.onrender.com";

async function openSite() {
  const browser = await puppeteer.launch({ headless: true }); // Launch a headless browser
  const page = await browser.newPage(); // Open a new page
  await page.goto(siteUrl); // Navigate to your site
  await browser.close(); // Close the browser
}

// Open the site every 1 minute
setInterval(openSite, 10000); // 60000 milliseconds = 1 minute
