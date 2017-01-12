import { Ng2ShopPage } from './app.po';

describe('ng2-shop App', function() {
  let page: Ng2ShopPage;

  beforeEach(() => {
    page = new Ng2ShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
