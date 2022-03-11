import searchPage from '../pageObject/searchPage';

const page = new searchPage();

let search;
beforeEach(() => {
  cy.fixture('secretTitle').then((name) => {
    search = name;
  });
});

Given('I open Google Advanced Page', () => {
  page.navigate();
});

When('I search Elon Musk', () => {
  page.inputTitle(search.title);
  page.chooseLanguage();
  page.chooseTime();
  page.submit();
});

Then('I can see result about Elon Musk', () => {
  cy.url()
    .should('include', 'as_q=Elon+Musk')
    .should('include', 'lr=lang_it')
    .should('include', 'as_qdr=w');
  page.getSearch().should('have.value', 'Elon Musk');
  page.getLanguage().contains('Search Italian pages');
  page.getTime().contains('Past week');
});
