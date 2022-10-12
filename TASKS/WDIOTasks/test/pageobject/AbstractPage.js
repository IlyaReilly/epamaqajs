module.exports = class AbstractPage {
  async open(link) {
    return await browser.url(link);
  }
};