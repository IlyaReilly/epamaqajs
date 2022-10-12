const gcalc = require('../PageObject/GoogleCalc');
const mail  = require('../PageObject/10minMail');
const gcalcres = require('../PageObject/GoogleCalcRes')

describe('google pricing', function(){
    this.timeout(50000);
    beforeEach(function() {
    });
    afterEach(function() {
    });

    it('go to google cloud', function() {
        gcalc.openURL('https://cloud.google.com/ ');
    });

    it('go to pricing form', function() {
        gcalc.paste_search('Google Cloud Platform Pricing Calculator');
        // gcalc.pressEnter();
        // gcalc.calc_form();
    });

    it('fill the form', function() {
        gcalc.fill_form();
    });
});

describe('mail stuff', function(){
    this.timeout(50000);
    beforeEach(function() {
    });
    afterEach(function() {
    });

    it('get a mail', function() {
        gcalc.go_to_mail();
    });
    it('copypaste mail', function() {
        gcalc.copy_mail();
        gcalc.paste_mail();
    });

    it('get a message', function() {
        gcalc.get_message();
    });
});

// describe('assert n quit', function(){
//     this.timeout(50000);
//     beforeEach(function() {
//     });
//     afterEach(function() {
//     });

//     it('hurtmeplenty assert', function() {
//         gcalcres.hurtmeplenty_assert();
//     });

//     it('quit', function() {
//         gcalcres.quit();
//     });
// });