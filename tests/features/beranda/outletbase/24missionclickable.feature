Feature: [HERO] 24. Outlet Base - Mission Clickable

  Scenario Outline: As a user, I can click mission on tab ecosystem

    Given I am on the Home page
    When I click menu Outlet Base
    Then system should be leading to Outlet Base page

    Given I am on the Outlet Base page
    When I search and click retailer
    Then system should be show retailer details

    When I click DTE mission
    Then system should be leading to Mission Details page