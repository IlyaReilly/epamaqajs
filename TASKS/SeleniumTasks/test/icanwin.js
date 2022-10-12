const pastebin = require('../PageObject/Pastebin');
describe('dscrb block', function(){
    this.timeout(50000);
    beforeEach(function() {
    });
    afterEach(function() {
    });

    it('go to pastebin', function() {
        pastebin.openURL('https://pastebin.com/');
    });
    it('paste title', function() {
        pastebin.paste_title('helloweb');
    })
    it('paste code', function() {
        pastebin.paste_code('Hello from WebDriver');
    });
    it('set expiration', function () {
        pastebin.set_exp();
    });
    it('submit', function() {
        pastebin.submit();
    });
    it('quit', function() {
        pastebin.quit();
    })
});