import puppeteer from 'puppeteer';
import querystring from 'querystring';
import { IsPhoneNumber } from 'class-validator';

interface IRecipientForm {
  orderNumber?: string;
  productName?: string;
  recipient?: string;
  phone?: string;
  cellPhone?: string;
  zipcode?: string;
  addressStreet?: string;
  address?: string;
  addressDetail?: string;
}

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

  const crawledData = await Promise.all(orderNumbers.map(async(orderNumber) => {
    if(orderNumber){
      const detailedPage = await browser.newPage();
      await detailedPage.goto(`http://armway.firstmall.kr/admin/order/view?query_string=&no=${orderNumber}`);

      await detailedPage.waitForSelector('#layout-body > table:nth-child(21) > tbody:nth-child(2) > tr > td:nth-child(5)');
      await detailedPage.waitForSelector('div.goods_name');
      await detailedPage.waitForSelector('div.goods_option');
      await detailedPage.waitForSelector('div.goods_input');
      await detailedPage.waitForSelector('table.order_shipping_table input');

      const item = await detailedPage.evaluate(async() => {
          const orderNumber = document.querySelector('#layout-body > table:nth-child(21) > tbody:nth-child(2) > tr > td:nth-child(5)')?.textContent?.replace(/[\n\t]/g, '');
          const resultName = Array.from(document.querySelectorAll('div.goods_name'));
          const resultOption = Array.from(document.querySelectorAll('div.goods_option'));
          const resultInput = Array.from(document.querySelectorAll('div.goods_input'));
          const resultRecipiantForm = Array.from(document.querySelectorAll('table.order_shipping_table input'));

          let result: any = {
            orderNumber,
            recipient: '',
            phone: '',
            cellPhone: '',
            zipcode: '',
            addressStreet: '',
            address: '',
            addressDetail: '',
            options: [],
            inputs: [],
          };

          resultName.map((value) => result = { ...result, productName: value.textContent?.replace(/[\n\t]/g, '') });
          
          resultRecipiantForm.map((formValue: any) => {

            if(formValue.name === "recipient_user_name"){
              result = {
                ...result,
                recipient: formValue.value,
              }
            }
            if(formValue.name === "recipient_phone[]"){
              result = {
                ...result,
                phone: result.phone + formValue.value,
              }
            }
            if(formValue.name === "recipient_cellphone[]"){
              result = {
                ...result,
                cellPhone: result.cellPhone + formValue.value,
              }
            }
            if(formValue.name === "recipient_zipcode"){
              result = {
                ...result,
                zipcode: formValue.value
              }
            }
            if(formValue.name === "recipient_address_street"){
              result = {
                ...result,
                addressStreet : formValue.value
              }
            }
            if(formValue.name === "recipient_address"){
              result = {
                ...result,
                address : formValue.value
              }
            }
            if(formValue.name === "recipient_address_detail"){
              result = {
                ...result,
                addressDetail : formValue.value
              }
            }
          });

          resultOption.map((value) => {
            result.options.push(value.textContent?.replace(/[\n\t]/g, ''));
          });

          resultInput.map((value) => {
            result.inputs.push(value.textContent?.replace(/[\n\t]/g, ''));
          })

          // resultOption.map((value) => result.push({ 'option': value.textContent?.replace(/[\n\t]/g, '') }));
          // resultInput.map((value) => result.push({ 'input': value.textContent?.replace(/[\n\t]/g, '') }));

          return result;
      });
    // await detailedPage.close();
      return item;
    }
  }))

  return crawledData;
}