import { Ng16Page } from './app.po';

describe('ng16 App', function() {
  let page: Ng16Page;

  beforeEach(() => {
    page = new Ng16Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
