const { assert, expect } = require("chai");

describe('bring it on', () => {
    it('search scenario', async () => {

        let codevalue = `git config --global user.name  "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`;

        await browser.url('https://pastebin.com/');
        await $('//*[@id="postform-name"]').setValue('how to gain dominance among developers');
        await $(`//*[@id="postform-text"]`).setValue(codevalue);
        await $('//*[@id="select2-postform-expiration-container"]').click();
        await $('//li[text()="10 Minutes"]').isDisplayed();
        await $('//li[text()="10 Minutes"]').click();
        await $('//*[@id="select2-postform-format-container"]').click();
        await $('//li[text()="Bash"]').isDisplayed();
        await $('//li[text()="Bash"]').click();
        await $('//*[@id="w0"]/div[5]/div[1]/div[10]/button').click();
    })

    it('assertion block', async () => {
        await $('//a[text()="Bash"]').isDisplayed();

        let bashSyntax = await $('//a[text()="Bash"]').getText();
        expect(bashSyntax).equals("Bash");

        const title = await browser.getTitle();
        expect(title).contains('how to gain dominance among developers');

        // let code = await $(".textarea").getText();
        // expect(code).equals(codevalue);
    })    
      
    
})