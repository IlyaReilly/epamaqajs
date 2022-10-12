

describe('icanwin', () => {
    it('full scenario', async () => {
        await browser.url('https://pastebin.com/')

        await $('//*[@id="postform-name"]').setValue('how to gain dominance among developers');
        await $(`//*[@id="postform-text"]`).setValue('hello');
        await $('//*[@id="select2-postform-expiration-container"]').click();
        await $('//li[text()="10 Minutes"]').isDisplayed();
        await $('//li[text()="10 Minutes"]').click();
        await $('//*[@id="w0"]/div[5]/div[1]/div[10]/button').click();

        // await $('#search_form_input_homepage').setValue('WebdriverIO')
        // await $('#search_button_homepage').click()

        // const title = await browser.getTitle()
        // console.log('Title is: ' + title)
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
})