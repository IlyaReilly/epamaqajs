const { expect } = require("chai");
const { get } = require("prompt");
const AbstractPage = require("./AbstractPage");
const GCalc = require("./GCalc");

class Mail extends AbstractPage {

  get copymail () {
    return $("#emailbox-input opentip"); //отсюда копируем временную почту
  }
  get emailEstimate() {
    return $("#email_quote");    // нажать кнопку емайл
  }
  get pastemail() {
    return $("#input_553");    // сюда вставляем почту
  }
  get sendEmailButton() {
    return $('//*[@ng-click="emailQuote.emailQuote(true); emailQuote.$mdDialog.hide()"]');
  }
  get readmessage() {
    return $('//*[@id="tm-body"]/main/div[1]/div/div[2]/div[2]/div/div[1]/div/div[4]/ul/li[2]/div[1]/a/span[3]');
  }
  get finalprice() {
    return $('//*[@id="tm-body"]/main/div[1]/div/div[2]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr[2]/td[2]/h3');
  }

  async getPriceViaMail() {

    const GoogleW = await browser.getWindowHandle();
    await browser.newWindow('https://temp-mail.org/ru/');
    const MailW = await browser.getWindowHandle();
    const tempmail = await this.copymail.getText();
    await browser.switchToWindow(GoogleW);
    await this.emailEstimate.click();
    await this.pastemail.setValue(tempmail);
    await this.sendEmailButton.click();
    await browser.switchToWindow(MailW);
    await this.readmessage.click();
    const finalprice = await this.finalprice.getText();
    return finalprice;
 
  }
}
module.exports = new Mail();