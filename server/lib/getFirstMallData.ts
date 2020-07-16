import puppeteer from 'puppeteer';
import querystring from 'querystring';

export const firstMall = async() => {
  const browser = await puppeteer.launch({
    headless : false,
  });

  const page = await browser.newPage();
  await page.goto("http://armway.firstmall.kr/admin/login/index");
  await page.evaluate((id, pw) => {
    if(document.querySelector('#loginForm > table > tbody > tr > td > div:nth-child(2) > table.tab1_y > tbody > tr:nth-child(2) > td > div > input')){
      let idElement:HTMLInputElement = document.querySelector('#loginForm > table > tbody > tr > td > div:nth-child(2) > table.tab1_y > tbody > tr:nth-child(2) > td > div > input') as HTMLInputElement;
      idElement.value = id;
    }
    
    if(document.querySelector('#loginForm > table > tbody > tr > td > div:nth-child(2) > table.tab1_y > tbody > tr:nth-child(4) > td > div > input')){
      let passwordElement:HTMLInputElement = document.querySelector('#loginForm > table > tbody > tr > td > div:nth-child(2) > table.tab1_y > tbody > tr:nth-child(4) > td > div > input') as HTMLInputElement;
      passwordElement.value = pw;
    }
    
    if(document.querySelector('#loginForm > table > tbody > tr > td > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td > input')){
      let clickableElement:HTMLInputElement = document.querySelector('#loginForm > table > tbody > tr > td > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td > input') as HTMLInputElement;
      clickableElement.click();
      }
  }, process.env.FIRSTMALL_ID!, process.env.FIRSTMALL_PASSWORD!);

  await page.waitForNavigation();
  await page.setRequestInterception(true);
  await page.on('request', request => {
    // const data = {
    //   'method': 'POST',
    //   'postData': 'query_string=&no=&keyword=&search_type=&regist_date_type=&date_field=regist_date&regist_date%5B%5D=2020-04-01&regist_date%5B%5D=2020-07-16&shipping_hope_sdate=&shipping_hope_edate=&shipping_reserve_sdate=&shipping_reserve_edate=&page=1&pagemode=&detailmode=&shipping_provider_seq=&bfStep=&nnum=&bankChk=N&last_step_cnt=undefined&last_step_settleprice=undefined&searchTime=2020-07-16 17',
    // };
    
    request.continue({
      'method': 'POST',
      'url': 'http://armway.firstmall.kr/admin/order/catalog_ajax',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      //   'X-Requested-With': 'XMLHttpRequest',
      },
      'postData': 
      'query_string=&no=&keyword=&search_type=&regist_date_type=&date_field=regist_date&regist_date%5B%5D=2020-04-01&regist_date%5B%5D=2020-07-16&shipping_hope_sdate=&shipping_hope_edate=&shipping_reserve_sdate=&shipping_reserve_edate=&page=1&pagemode=&detailmode=&shipping_provider_seq=&bfStep=&nnum=&bankChk=N&last_step_cnt=undefined&last_step_settleprice=undefined&searchTime=2020-07-16 17',
    });
  });

  // await page.on('response', async (response) => {
  
  // });

  await page.goto("http://armway.firstmall.kr/admin/order/catalog_ajax");
  
  const orderNumbers = await page.evaluate(async() => {
    const orderNumberElements = Array.from(document.querySelectorAll('.order-step-color-75.bold'));
    return orderNumberElements.map(value => value.textContent);
  });
  const crawledData = await Promise.all(orderNumbers.map(async(orderNumbers) => {
    const detailedPage = await browser.newPage();
    await detailedPage.goto(`http://armway.firstmall.kr/admin/order/view?query_string=&no=${orderNumbers}`);

    // await detailedPage.waitForSelector('div.goods_name');
    // await detailedPage.waitForSelector('div.goods_option');
    // await detailedPage.waitForSelector('div.goods_input');
    const item = await detailedPage.evaluate(async() => {
        const resultName = Array.from(document.querySelectorAll('div.goods_name'));
        const resultOption = Array.from(document.querySelectorAll('div.goods_option'));
        const resultInput = Array.from(document.querySelectorAll('div.goods_input'));
        const result: any = [];
        resultName.map((value) => result.push({ 'name': value.textContent?.replace(/[\n\t]/g, '') }));
        resultOption.map((value) => result.push({ 'option': value.textContent?.replace(/[\n\t]/g, '') }));
        resultInput.map((value) => result.push({ 'input': value.textContent?.replace(/[\n\t]/g, '') }));
        return result;
    });
    await detailedPage.close();
    return item;
  }))

  return crawledData;
}