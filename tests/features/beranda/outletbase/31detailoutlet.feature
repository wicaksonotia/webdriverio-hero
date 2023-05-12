Feature: [HERO] 31. Outlet Base - Detail Outlet (read only) SPV

  Scenario Outline: As a SPV user, I can see Daftar Kunjungan Toko
    Given I am on the Home page
    When I click menu Outlet Base
    Then system should be leading to Outlet Base page

    Given I am on the Outlet Base page
    When I search and click retailer
    Then system should be show retailer details