const { Builder, By, Key, until } = require("selenium-webdriver");
let driver = new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({ implicit: (20000) });

class AbstractPage {
  constructor() {
    global.driver = driver;
  }

  async openURL(url) {
    await driver.get(url);
  }

  async pressEnter() {
    await driver.actions().keyDown(Key.ENTER).keyUp(Key.ENTER).perform();
  }

  async quit() {
    await driver.quit();
}

  async click_element(element) {
    await driver.findElement(element).click();
  }

  // async inputTextIntoElement(element, text) {
  //   await (await this.driver.findElement(element)).sendKeys(text);
  // }

  // async close() {
  //   await this.driver.quit();
  // }

 

  // async getTextFromElement(element) {
  //   return await (await this.driver.findElement(element)).getText();
  // }

  // async getTextFromTitle() {
  //   return await (
  //     await this.driver.wait(until.elementLocated(By.css('html')))
  //   ).getTitle();
  // }
}

module.exports = AbstractPage;