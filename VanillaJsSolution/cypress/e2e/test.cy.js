describe('template spec', () => {
  it('test1', () => {
    cy.visit('');
    cy.get('#phone').type('13').should('have.value', '13');
  });
  it('test2', () => {
    cy.visit('');
    cy.get('#phone').type('...kppahbckjasdf').should('have.value', '');
  });
  it('test3', () => {
    cy.visit('');
    cy.get('#phone').type('1hello3').should('have.value', '13');
  });
  it('test4', () => {
    cy.visit('');
    cy.get('#phone').type('123').should('have.value', '123');
  });
  it('test5', () => {
    cy.visit('');
    cy.get('#phone').type('123         ').should('have.value', '123');
  });
  it('test6', () => {
    cy.visit('');
    cy.get('#phone').type('123asdf').should('have.value', '123');
  });
  it('test7', () => {
    cy.visit('');
    cy.get('#phone').type('1234{backspace}').should('have.value', '123');
  });
  it('test8', () => {
    cy.visit('');
    cy.get('#phone').type('1234').should('have.value', '(123) 4');
  });
  it('test9', () => {
    cy.visit('');
    cy.get('#phone').type('12345').should('have.value', '(123) 45');
  });
  it('test10', () => {
    cy.visit('');
    cy.get('#phone').type('123456').should('have.value', '(123) 456');
  });
  it('test11', () => {
    cy.visit('');
    cy.get('#phone')
      .type('1234567{backspace}')
      .should('have.value', '(123) 456');
  });
  it('test12', () => {
    cy.visit('');
    cy.get('#phone').type('1237869').should('have.value', '(123) 786-9');
  });
  it('test13', () => {
    cy.visit('');
    cy.get('#phone').type('123786901').should('have.value', '(123) 786-901');
  });
  it('test14', () => {
    cy.visit('');
    cy.get('#phone').type('123pu7869').should('have.value', '(123) 786-9');
  });
  it('test15', () => {
    cy.visit('');
    cy.get('#phone')
      .type('123pu7869{leftArrow}{leftArrow}{leftArrow}{backspace}')
      .should('have.value', '(123) 769');
  });
  it('test16', () => {
    cy.visit('');
    cy.get('#phone')
      .type('123pu7869{leftArrow}{leftArrow}{leftArrow}{leftArrow}{backspace}')
      .should('have.value', '(123) 869');
  });
  it('test17', () => {
    cy.visit('');
    cy.get('#phone')
      .type('123pu7869{leftArrow}{leftArrow}{leftArrow}{backspace}{backspace}')
      .should('have.value', '(123) 69');
  });
  it('test18', () => {
    cy.visit('');
    cy.get('#phone')
      .type(
        '123pu7869{leftArrow}{leftArrow}{leftArrow}{leftArrow}{backspace}{backspace}'
      )
      .should('have.value', '(123) 869');
  });
  it('test19', () => {
    cy.visit('');
    cy.get('#phone')
      .type(
        '123pu7869{leftArrow}{leftArrow}{leftArrow}{leftArrow}{backspace}{backspace}0'
      )
      .should('have.value', '(123) 086-9');
  });
  it('test20', () => {
    cy.visit('');
    cy.get('#phone')
      .type(
        '123pu7869{leftArrow}{leftArrow}{leftArrow}{leftArrow}{backspace}{backspace}456'
      )
      .should('have.value', '(123) 456-869');
  });
  it('test21', () => {
    cy.visit('');
    cy.get('#phone')
      .type(
        '123pu7869{leftArrow}{leftArrow}{leftArrow}{leftArrow}{backspace}{backspace}...kkkaaass'
      )
      .should('have.value', '(123) 869');
  });
  it('test22', () => {
    cy.visit('');
    cy.get('#phone')
      .type(
        '123pu7869{leftArrow}{leftArrow}{leftArrow}{leftArrow}{backspace}{backspace}4hellloww56'
      )
      .should('have.value', '(123) 456-869');
  });
  it('test23', () => {
    cy.visit('');
    cy.get('#phone')
      .type('1237869{leftArrow}{leftArrow}{leftArrow}{leftArrow}{backspace}4')
      .should('have.value', '(123) 486-9');
  });
  it('test24', () => {
    cy.visit('');
    cy.get('#phone').type('123{leftArrow}0').should('have.value', '(120) 3');
  });
  it('test25', () => {
    cy.visit('');
    cy.get('#phone')
      .type('1234{leftArrow}{leftArrow}5')
      .should('have.value', '(123) 54');
  });
  it('test26', () => {
    cy.visit('');
    cy.get('#phone')
      .type('1234{moveToStart}5')
      .should('have.value', '(512) 34');
  });
  it('test27', () => {
    cy.visit('');
    cy.get('#phone')
      .type('1234{moveToStart}5{rightArrow}{rightArrow}7')
      .should('have.value', '(512) 734');
  });
  it('test28', () => {
    cy.visit('');
    cy.get('#phone')
      .type('1234{moveToStart}5{rightArrow}7')
      .should('have.value', '(517) 234');
  });
  it('test29', () => {
    cy.visit('');
    cy.get('#phone')
      .type('12345.aapphg678{leftArrow}{leftArrow}012{backspace}{backspace}')
      .should('have.value', '(123) 456-078');
  });
  it('test30', () => {
    cy.visit('');
    cy.get('#phone')
      .type(
        '12345.aapphg678{leftArrow}{leftArrow}012{backspace}{backspace}{leftArrow}{leftArrow}1'
      )
      .should('have.value', '(123) 456-1078');
  });
});
