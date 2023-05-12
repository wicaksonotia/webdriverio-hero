Feature: [HERO] 25. Outlet Base - Detail Mission Non XP

  Scenario Outline: As a user, I can click see details of non xp mission

    Given I am on the Home page
    When I click menu Outlet Base
    Then system should be leading to Outlet Base page

    Given I am on the Outlet Base page
    When I search and click retailer
    Then system should be show retailer details

    When I click DTE mission
    Then system should be leading to Mission Details page