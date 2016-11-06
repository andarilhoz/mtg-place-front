import { MtgPlaceFrontPage } from './app.po';

describe('mtg-place-front App', function() {
  let page: MtgPlaceFrontPage;

  beforeEach(() => {
    page = new MtgPlaceFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
