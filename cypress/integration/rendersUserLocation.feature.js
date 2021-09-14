describe("weather info for user's location", () => {
  it("is expected to be ", () => {
    cy.visit("/");
    cy.get("[data-cy=weather-display]").within(() => {
      cy.get("[data-cy=temp").should("contain", "17°C");
      cy.get("[data-cy=location]").should("contain", "Virum");
    });
  });
});
