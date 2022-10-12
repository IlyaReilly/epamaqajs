const { Builder, By, Key, until } = require("selenium-webdriver");
var AbstractPage = require('./AbstractPage');
const GoogleCalc = require("./GoogleCalc");

// НА ЭТОЙ СТРАНИЦЕ ОТОБРАЖАЮТСЯ ТОЛЬКО АССЕРТЫ

// Проверить соответствие данных следующих полей: VM Class, Instance type, Region, local SSD, commitment term

class gcalcres extends AbstractPage {
    
    async hurtmeplenty_assert() {
        
        let vmclass = await driver
        .findElement(By.className("md-1-line md-no-proxy ng-scope"))
        .getAttribute();
        assert.match(/Regular/, vmclass);

        let instancetype = await driver
        .findElement(By.className("md-list-item-text ng-binding cpc-cart-multiline flex"))
        .getAttribute();
        assert.match(/n1-standard-8/, instancetype);

        let region = await driver
        .findElement(By.className("md-1-line md-no-proxy"))
        .getAttribute();
        assert.match(/Frankfurt/, region);

        let localssd = await driver
        .findElement(By.className("md-list-item-text ng-binding cpc-cart-multiline flex"))
        .getAttribute();
        assert.match(/2x375 GiB/, localssd);

        let commitment = await driver
        .findElement(By.className("md-1-line md-no-proxy ng-scope"))
        .getAttribute();
        assert.match(title, commitment);
    }

    async hardcore_assert() {
        
        let title = await driver
        .findElement(By.css("head title"))
        .getAttribute("innerHTML");
        assert.match(title, titlename);
    }
}

module.exports = new gcalcres();