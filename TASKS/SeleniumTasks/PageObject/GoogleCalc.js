// const { Builder, By, Key, until } = require("selenium-webdriver");
const { assert } = require('chai');
var AbstractPage = require('./AbstractPage');


// НА ЭТОЙ СТРАНИЦЕ ОТОБРАЖАЮТСЯ ВСЕ ДЕЙСТВИЯ С ГУГЛ КАЛЬКУЛЯТОРОМ, НА РЕЗУЛЬТИРУЮЩЕЙ СТРАНИЦЕ ТОЛЬКО АССЕРТЫ

class gcalc extends AbstractPage {
    async paste_search(searchtext) {
        await driver.findElement(By.className("devsite-search-form")).click();
        await driver.findElement(By.className("devsite-search-field devsite-search-query")).sendKeys(searchtext);
    }
    async calc_form() {
        await driver.findElement(By.xpath('//b[text()="Google Cloud Pricing Calculator"]')).click();
        await driver.findElement(By.classname('hexagon-in2')).click();
    }
    async fill_form() {

        // number of instances
        await driver.findElement(By.id('input_90')).sendKeys('4');

        // OS/Software
        await driver.findElement(By.classname('select_value_label_82')).click();
        await driver.findElement(By.id('select_option_92')).click();

        // VM class
        await driver.findElement(By.id('select_value_label_83')).click();
        await driver.findElement(By.id('select_option_105')).click();

        // instance type
        await driver.findElement(By.id('select_value_label_85')).click();
        await driver.findElement(By.id('select_option_200')).click();
        await driver.findElement(By.id('select_value_label_86')).click();
        await driver.findElement(By.id('select_option_460')).click();

        // Add GPUs
        await driver.findElement(By.classname('ng-valid ng-dirty ng-valid-parse ng-touched ng-empty')).click();
        await driver.findElement(By.id('select_value_label_493')).click();
        await driver.findElement(By.id('select_option_536')).click();
        await driver.findElement(By.id('select_value_label_494')).click();
        await driver.findElement(By.id('select_option_539')).click();
      
        // Local SSD
        await driver.findElement(By.id('select_value_label_451')).click();
        await driver.findElement(By.id('select_option_478')).click();

        // Datacenter location
        await driver.findElement(By.id('select_value_label_88')).click();
        await driver.findElement(By.id('select_option_227')).click();

        // Commited usage
        await driver.findElement(By.id('select_value_label_89')).click();
        await driver.findElement(By.id('select_option_128')).click();

        // Add to estimate
        await driver.findElement(By.classname('md-raised md-primary cpc-button md-button md-ink-ripple')).click();
    }

    async go_to_mail() {
        const originalWindow = await driver.getWindowHandle();
        await driver.switchTo().newWindow('MailWindow');
        await driver.get('https://temp-mail.org/ru/')
      }
    
      async copy_mail () {
       return pastemail = await driver.findElement(By.className('emailbox-input opentip')).gettext(); //отсюда копируем временную почту
    }
      async paste_mail () {
        await driver.switchTo().window(originalWindow);
        await driver.findElement(By.className("ng-pristine ng-untouched md-input ng-empty ng-invalid ng-invalid-required ng-valid-email")).sendKeys(pastemail);
        await driver.findElement(By.className('md-raised md-primary cpc-button md-button md-ink-ripple')).click();
        }
    
      async get_message () {
        await driver.switchTo().window(MailWindow);
        await driver.findElement(By.xpath('//a[text()="Google Cloud Pricing Calculator"]')).click(); // сначала убедиться что он естт а потом нажать
        return mailprice = await driver.findElement(By.tagName('h2')).Below(By.xpath('//h1[text]()="Your Estimated Bill *"]')).gettext(); // находим стоимость в ПОЧТЕ
     
      }
    

    // ПЛАН СЛЕДУЮЩИЙ
    // ПОЛУЧАЕМ ЦЕНУ, ЗАГОНЯЕМ СТОИМОСТЬ В ПЕРЕМЕННУЮ, ПРОДЕЛЫВАЕМ ВСЕ МАНИПУЛЯЦИИ С ПОЧТОЙ,
    // НАХОДИМ ЦЕНУ И ДЕЛАЕМ assert.match
    
}

module.exports = new gcalc();