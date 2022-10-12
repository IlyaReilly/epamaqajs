const { expect } = require('chai');
const GCalc = require('../pageobject/Gcalc');
const { finalprice } = require('../pageobject/Mail');
const Mail = require('../pageobject/Mail');
describe('Hurt me plenty', () => {
    let link = "https://cloud.google.com/";
    let cost = " 4,026.13";

    it('Calc scenario', async () => {
        await GCalc.open(link);
        await GCalc.navigateToComputeEngine();
        await GCalc.switchToCalcFrame();
        await GCalc.setParamToCalc();
    })
    it('mail', async () => {
        await Mail.getPriceViaMail();
        expect(finalprice).contains(cost);
    })
})