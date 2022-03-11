class searchPage {
  navigate() {
    cy.visit('https://www.google.com/advanced_search?hl=en');
  }

  inputTitle(title) {
    cy.get('[name="as_q"]')
      .clear()
      .type(title);
    return this;
  }

  chooseLanguage() {
    cy.get('#lr_button').click();
    cy.get('.goog-menuitem[value="lang_it"]').click();
    cy.get('[id="as_qdr_button"]').click();
    return this;
  }

  chooseTime() {
    cy.get('#as_qdr_menu [value="w"]').click();
    return this;
  }

  submit() {
    cy.get('[type="submit"]').click();
    return this;
  }

  getSearch() {
    return cy.get('input.gLFyf.gsfi');
  }

  getLanguage() {
    return cy.get('#hdtbMenus span:nth-child(2) .KTBKoe');
  }

  getTime() {
    return cy.get('#hdtbMenus span:nth-child(3) .KTBKoe');
  }
}

export default searchPage;
