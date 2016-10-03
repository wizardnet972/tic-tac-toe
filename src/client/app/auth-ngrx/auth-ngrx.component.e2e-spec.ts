describe('AuthNgrx', () => {

  beforeEach( () => {
    browser.get('/auth-ngrx');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-auth-ngrx h2')).getText()).toEqual('Features');
  });

});
