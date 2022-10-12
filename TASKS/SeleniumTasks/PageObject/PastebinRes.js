var AbstractPage = require('./AbstractPage');

class pastebinres extends AbstractPage {

    async title_assert(titlename) {
        
        let title = await driver
        .findElement(By.css("head title"))
        .getAttribute("innerHTML");
        assert.match(title, titlename);
    }
    async bash_assert() {
        
        let bashSyntax = await driver
        .findElement(By.xpath('//a[text()="Bash"]'))
        .getText();
        assert.strictEqual(bashSyntax, "Bash");
    }
    async code_assert(codevalue) {

        let code = await driver.findElement(By.css(".textarea")).getText();
        assert.strictEqual(code, codevalue);

    }
}

module.exports = new pastebinres();