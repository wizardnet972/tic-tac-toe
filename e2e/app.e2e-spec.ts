import { TicTacToePage } from './app.po';

describe('tic-tac-toe App', () => {
  let page: TicTacToePage;

  beforeEach(() => {
    page = new TicTacToePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
