var AbstractPage = require('./AbstractPage');

class pastebin extends AbstractPage {
    
    async paste_title(titlename) {
        await driver
        .findElement(By.id('postform-name'))
        .sendKeys(titlename);
    }
    async paste_code(codevalue) {
        await driver
        .findElement(By.id('postform-text'))
        .sendKeys(codevalue);
    }
    async set_exp() {
        await driver
        .findElement(By.id('select2-postform-expiration-container'))
        .click();
        await driver
        .findElement(By.xpath('//li[text()="10 Minutes"]'))
        .click();
    }  
    async set_bash() {
        await driver
        .findElement(By.xpath('/html/body/div[2]/div[2]/div[1]/div[2]/div/form/div[5]/div[1]/div[3]/div/span/span[1]/span/span[1]'))
        .click();
    
        await driver
        .findElement(By.xpath('//li[text()="Bash"]'))
        .click();
    }
    async submit() {
        await driver.findElement(By.className('btn -big')).click();
        await driver.wait(until.elementLocated(By.className('bash')), 90000);
    }      
    

}

module.exports = new pastebin();