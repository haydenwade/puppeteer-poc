const config = require('../config');

describe('Test1: Google', () => {
    beforeAll(async () => {
      await page.goto(config.siteUrl);
      await page.screenshot({path: config.screenShotsDirectory + 'example.png'});
    });
  
    it('should be titled "Google"', async () => {
      await expect(page.title()).resolves.toMatch('Google');
    });
  });