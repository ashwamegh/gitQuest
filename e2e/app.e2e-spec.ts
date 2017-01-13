import { GitQuestPage } from './app.po';

describe('git-quest App', function() {
  let page: GitQuestPage;

  beforeEach(() => {
    page = new GitQuestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
