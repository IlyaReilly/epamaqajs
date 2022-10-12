const GCalc = require('../pageobject/Gcalc');
describe('Hurt me plenty', () => {
    let link = "https://cloud.google.com/";
    let cost = " 4,026.13";

    it('Calc scenario', async () => {
        await GCalc.open(link);
        await GCalc.navigateToComputeEngine();
        await GCalc.switchToCalcFrame();
        await GCalc.setParamToCalc();
    });

    it("Assertions block", async () => {
        await expect(await GCalc.price.getText()).to.include(cost);
        await expect(await GCalc.VMClass.getText()).to.include("regular");
        await expect(await GCalc.instType.getText()).to.include("n1-standard-8");
        await expect(await GCalc.region.getText()).to.include("Frankfurt");
        await expect(await GCalc.SSD.getText()).to.include("2x375");
        await expect(await GCalc.term.getText()).to.include("1 Year");
    });
});