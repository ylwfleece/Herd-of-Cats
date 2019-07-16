import { HoCPage } from './app.po';

describe('ho-c App', function() {
  let page: HoCPage;

  beforeEach(() => {
    page = new HoCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
