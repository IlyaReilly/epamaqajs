// // var AbstractPage = require('./AbstractPage');
// const AbstractPage = require('./AbstractPage');
// const GoogleCalc = require('./GoogleCalc');

// class mail extends AbstractPage {

//   async go_to_mail() {
//     const originalWindow = await driver.getWindowHandle();
//     await driver.switchTo().newWindow('MailWindow');
//     await driver.get('https://temp-mail.org/ru/')
//   }

//   async copy_mail () {
//    return pastemail = await driver.findElement(By.className('emailbox-input opentip')).gettext(); //отсюда копируем временную почту
// }
//   async paste_mail () {
//     await driver.switchTo().window(originalWindow);
//     await driver.findElement(By.className("ng-pristine ng-untouched md-input ng-empty ng-invalid ng-invalid-required ng-valid-email")).sendKeys(pastemail);
//     await driver.findElement(By.className('md-raised md-primary cpc-button md-button md-ink-ripple')).click();
//     }

//   async get_message () {
//     await driver.switchTo().window(MailWindow);
//     await driver.findElement(By.xpath('//a[text()="Google Cloud Pricing Calculator"]')).click(); // сначала убедиться что он естт а потом нажать
//     return mailprice = await driver.findElement(By.tagName('h2')).Below(By.xpath('//h1[text]()="Your Estimated Bill *"]')).gettext(); // находим стоимость в ПОЧТЕ
 
//   }
// }



// module.exports = new mail();
