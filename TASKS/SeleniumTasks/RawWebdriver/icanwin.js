const {Builder, By} = require('selenium-webdriver');
const assert = require('assert');
const { titleContains } = require('selenium-webdriver/lib/until');

(async function firstScript() {
  try {
   
    let driver = await new Builder().forBrowser('chrome').build();

    

    await driver.get('https://pastebin.com');

    let titleBox = await driver.findElement(By.name('PostForm[name]'));
    let codeBox = await driver.findElement(By.name('PostForm[text]'));
    let setExp = await driver.findElement(By.id('select2-postform-expiration-container'));
    let submitButton = await driver.findElement(By.className('btn -big'));


    await codeBox.sendKeys('Hello from WebDriver');   
    await titleBox.sendKeys('helloweb');
    await setExp.click();
    
    let set10Exp = await driver.findElement(By.xpath('/html/body/span[2]/span/span[2]/ul/li[3]'));
    await set10Exp.click();

    await submitButton.click();


    await driver.wait(until.elementLocated(By.className('bash')), 90000);
    
    await driver.quit();
  } catch (error) {
    console.log(error)
  }
})();
