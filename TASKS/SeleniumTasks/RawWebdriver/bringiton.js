const {Builder, By, until} = require('selenium-webdriver');
const assert = require('assert');
const { titleContains } = require('selenium-webdriver/lib/until');
// const { doesNotMatch } = require('assert');

(async function firstScript() {
  try {
    let driver = await new Builder().forBrowser('chrome').build();

  await driver.get('https://pastebin.com');

    let codevalue = `git config --global user.name  "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`;

    await driver
    .findElement(By.name('PostForm[text]'))
    .sendKeys(codevalue);

    await driver
    .findElement(By.xpath('/html/body/div[2]/div[2]/div[1]/div[2]/div/form/div[5]/div[1]/div[3]/div/span/span[1]/span/span[1]'))
    .click();
    
    await driver
    .findElement(By.xpath('//li[text()="Bash"]'))
    .click();

    await driver
    .findElement(By.xpath('/html/body/div[2]/div[2]/div[1]/div[2]/div/form/div[5]/div[1]/div[4]/div/span/span[1]/span/span[1]'))
    .click();
    
    await driver
    .findElement(By.xpath('//li[text()="10 Minutes"]'))
    .click();

    await driver
    .findElement(By.name('PostForm[name]'))
    .sendKeys('how to gain dominance among developers');

    await driver
    .findElement(By.className('btn -big'))
    .click();

    await driver.wait(until.elementLocated(By.className('bash')), 90000);


  let title = await driver
  .findElement(By.css("head title"))
  .getAttribute("innerHTML");
  assert.match(title, /how to gain dominance among developers/);


  let bashSyntax = await driver
  .findElement(By.xpath('//a[text()="Bash"]'))
  .getText();
  assert.strictEqual(bashSyntax, "Bash");


  let code = await driver.findElement(By.css(".textarea")).getText();
  assert.strictEqual(code, codevalue);

    await driver.quit();

  } catch (error) {
    console.log(error)  
  }

  
})();

