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

  it("Should not be able to press the 'Find Charities' button without filling in all fields first", () => {
    cy.get('.find-charities-btn').should('have.attr', 'disabled')
      .url().should('include', '/')
  })

  it('Should have 11 options for a charity category (not including the default vale --Select a Category--)', () => {
    cy.get('.select-category option').should('have.length', 12)
  })

  it('Should have 50 options for state selection (not including the default value --Select a State--)', () => {
    cy.get('.select-state option').should('have.length', 51)
  })

  it("Should be able to click 'Find Charities' button after filling out all fields on form", () => {
    cy.get('.select-category').select('Animal-Related')
      .get('.select-state').select('Colorado')
      .get('.select-city').type('Denver')
      .get('.find-charities-btn').should('not.have.attr', 'disabled')
  })

<<<<<<< HEAD
  it('Should be able to navigate to the About page', () => {
    cy.get('.to-about-btn').click()
      .url().should('include', '/about')
  })
=======
//PUT IN TESTS FOR NAVIGATING TO OTHER PAGES
>>>>>>> main
})

describe('Charity Local Main Dashboard- Finding Charities', () => {
  before(() => {
<<<<<<< HEAD
    cy.intercept('GET', `https://api.data.charitynavigator.org/v2/Organizations?app_id=51c3d010&app_key=f71a48f0402bea6076390a0a521c26b4&categoryID=1&state=CO&city=Denver`, {
      fixture: 'charityData.json',
      statusCode: 200
    })
  })

  it("Should display the main dashboard after clicking 'Find Charities' button", () => {
    cy.visit('http://localhost:3000')
      .get('.select-category').select('Animal-Related')
      .get('.select-state').select('Colorado')
      .get('.select-city').type('Denver')
      .get('.find-charities-btn').click()
      .get('.main-dashboard')
=======
    cy.visit('http://localhost:3000')
      .fixture('charityData.json')
        .then(data => {
          cy.intercept('GET', `https://api.data.charitynavigator.org/v2/Organizations?app_id=51c3d010&app_key=f71a48f0402bea6076390a0a521c26b4&categoryID=$1&state=CO&city=Denver`, {
            statusCode: 201,
            body: data
          })
      })
  })

  it("Should display a loading message after clicking 'Find Charities' button", () => {
    cy.get('.select-category').select('Animal-Related')
      .get('.select-state').select('Colorado')
      .get('.select-city').type('Denver')
      .get('.find-charities-btn').click()
      .get('.loading-message')
>>>>>>> main
  })

  it('Should dispaly the main dashboard after the fetch request finishes loading', () => {
    cy.get('.main-dashboard')
      .url().should('include', '/dashboard')
<<<<<<< HEAD
      .get('.dashboard-header button').should('have.length', 2)
=======
      .get('.dashboard-header button').should('have.length', 3)
>>>>>>> main
  })

  it('Should display the charities that match the search', () => {
    cy.get('.charity-cards-section').find('.charity-card').should('have.length', 4)
  })

  it('Should display information for each charity that matches the search', () => {
    cy.get('.charity-card')
      .get('.charity-name').should('contain', 'Dumb Friends League')
      .get('.state-and-city').should('contain', 'Denver, CO')
      .get('.address').should('contain', '2080 South Quebec Street , 80231')
      .get('.charity-cause').should('contain', 'Animal Rights, Welfare, and Services')
      .get('.charity-mission').should('contain', 'The Dumb Friends League mission is working with our compassionate community we will end pet homelessness and animal suffering.Founded in 1910, the Dumb Friends League speaks for those who cannot speak for themselves and is a national leader in providing care to lost and abandoned pets, adopting pets to new homes, helping pets stay in homes, educating pet owners and the public, rescuing sick, injured and abused animals, providing free or low cost spay/neuter and veterinary services. The Harmony Equine Center receives abused and neglected horses that are removed from owners by law enforcement agencies, offering them rehabilitation, training and adoption opportunities. The largest independent, community-based animal welfare organization in the Rocky Mountain region, it receives more than 21,000 animals a year.')
  })

<<<<<<< HEAD
  it('Should be able to navigate to About page form dashboard', () => {
    cy.get('.to-about-btn').click()
      .url().should('include', '/about')
  })

  it('Should be able to navigate back to dashboard from About page and see previous charity search', () => {
    cy.get('.to-dashboard-page-btn').click()
      .get('.charity-cards-section').find('.charity-card').should('have.length', 4)
  })
=======
//PUT TESTS FOR TRAVELING TO OTHER PAGES HERE
>>>>>>> main

  it('Should be able to navigate back to the landing page', () => {
    cy.get('.to-landing-page-btn').click()
      .get('.landing-page').find('.site-title').should('contain', 'Charity Local')
      .url().should('include', '/')
  })
})

describe('Charity Local - Error Handling', () => {
<<<<<<< HEAD
  beforeEach(() => {
    cy.intercept('GET', `https://api.data.charitynavigator.org/v2/**`, {
      statusCode: 404
    })
  })

  it("Should be redirected to landing page with an error message if no charities match the search filters", () => {
    cy.visit('http://localhost:3000')
      .get('.select-category').select('Animal-Related')
      .get('.select-state').select('Colorado')
      .get('.select-city').type('Denver')
=======
  before(() => {
    cy.visit('http://localhost:3000')
      .fixture('charityData.json')
        .then(data => {
          cy.intercept('GET', `https://api.data.charitynavigator.org/v2/Organizations?app_id=51c3d010&app_key=f71a48f0402bea6076390a0a521c26b4&categoryID=$1&state=CO&city=Denver`, {
            statusCode: 404,
            body: data
          })
      })
  })

  it("Should be redirected to landing page with an error message if no charities match the search filters", () => {
    cy.get('.select-category').select('Animal-Related')
      .get('.select-state').select('Colorado')
      .get('.select-city').type('Denvers')
>>>>>>> main
      .get('.find-charities-btn').click()
      .url().should('include', '/')
      .get('.error').should('contain', 'Sorry, but there seems to be no charities in our database that matched your search. Try searching for a different category OR location.')
  })

  it('Should not be able to see error message after slecting a category', () => {
    cy.get('.select-category').select('Animal-Related')
      .get('.error').should('not.exist')
  })

  it("Should be redirected to a 'Not Found' page if a user tries to visit a url that doesn't exist", () => {
    cy.visit('http://localhost:3000/doesnotexist')
      .get('.header').should('contain', 'Sorry! This page does not exist!')
  })

  it('Should be able to navigate to landing page from the Not Found page', () => {
    cy.get('.landing-page-btn').click()
      .get('.landing-page').find('.site-title').should('contain', 'Charity Local')
      .url().should('include', '/')
  })
})
