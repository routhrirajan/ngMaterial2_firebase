import { NgMaterialPage } from './app.po';

describe('ng-material App', () => {
  let page: NgMaterialPage;

  beforeEach(() => {
    page = new NgMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
