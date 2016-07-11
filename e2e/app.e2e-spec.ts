import { WEEEDUPage } from './app.po';

describe('weeedu App', function() {
  let page: WEEEDUPage;

  beforeEach(() => {
    page = new WEEEDUPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
