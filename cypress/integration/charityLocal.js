describe('Charity Local Landing Page', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be presented with landing page upon website load', () => {
      cy.get('.landing-page').find('.site-title').should('contain', 'Charity Local')
        .get('form').find('.charity-search-header').should('contain', 'Find Local Charities')
        .get('.select-category').should('contain', '--Select a Category--')
        .get('.select-state').should('contain', '--Select a State--')
        .get('.select-city')
        .get('.find-charities-btn').should('have.attr', 'disabled')
  })
})
