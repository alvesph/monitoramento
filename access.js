require('dotenv').config();
const puppeteer = require('puppeteer');
// const readlineSync = require('readline-sync');

async function robo() { 
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const Url = `https://unsplash.com/`
  await page.goto(Url);

  await page.click('[href="/login"]');

  await page.type('[name="user[email]"]', process.env.UNSPLASH_EMAIL)
  await page.type('#user_password', process.env.UNSPLASH_PASS)

  await page.click('[type="submit"]')

  await page.waitForNavigation();

  await page.goto(`https://unsplash.com/photos/OXerfDPf6mk`);

  await page.click('[title="Like photo"]')
  // await page.screenshot({ path: 'example.png' });

  // await browser.close();
}

robo();