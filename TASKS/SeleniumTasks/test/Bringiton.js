const pastebin = require('../PageObject/Pastebin');
const pastebinres = require('../PageObject/PastebinRes');
let codevalue = `git config --global user.name  "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`;

describe('dscrb block', function(){
    beforeEach(function() {
    });
    afterEach(function() {
    });

    it('go to pastebin', function() {
        pastebin.openURL('https://pastebin.com/');
    });
    it('paste title', function() {
        pastebin.paste_title('how to gain dominance among developers');
    });
    it('paste code', function() {
        pastebin.paste_code(codevalue);
    });
    it('set expiration', function () {
        pastebin.set_exp();
    });
    it('set bash', function() {
        pastebin.set_bash();
    });
    it('submit', function() {
        pastebin.submit();
    });
    
    it('asserts', function() {
      pastebinres.bash_assert;
      pastebinres.title_assert(/how to gain dominance among developers/);
      pastebinres.code_assert(codevalue);
    });
    it('quit', function() {
      pastebin.quit();
    })
});

















// const AbstractPage = require('../PageObject/AbstractPage');

// it('have to "Открыть https://pastebin.com или аналогичный сервис в любом браузере"', async function () {
//     await AbstractPage.openURL();
//   });

// await AbstractPage.OpenUrl('https://pastebin.com ');

// describe('Test for task "I Can Win"', function () {
//   const textNewPaste = 'Hello from WebDriver';
//   const textPasteName = 'helloweb';

//   it('have to "Открыть https://pastebin.com или аналогичный сервис в любом браузере"', async function () {
//     await pastebin.openURL();
//   });

//   it('have to "Создать New Paste со следующими деталями: * Код: "Hello from WebDriver""', async function () {
//     await pastebin.inputNewPaste(textNewPaste);
//   });

//   it('have to "Создать New Paste со следующими деталями: * Paste Expiration: "10 Minutes""', async function () {
//     await pastebin.setPasteExpiration();
//   });

//   it('have to "Создать New Paste со следующими деталями: * Paste Name / Title: "helloweb""', async function () {
//     await pastebin.inputPasteName(textPasteName);
//   });

//   after(async function () {
//     await pastebin.close();
//   });
// });
