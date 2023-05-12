Feature: [HERO] 23. Outlet Base - Jumlah dan Histori XP

  Scenario Outline: As a user, I can see retailer's jumlah dan histori xp

    Given I am on the Home page
    When I click menu Outlet Base
    Then system should be leading to Outlet Base page

    Given I am on the Outlet Base page
    When I search and click retailer
    Then system should be show retailer details