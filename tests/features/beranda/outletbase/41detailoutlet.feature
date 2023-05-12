Feature: [HERO] 31. Outlet Base - Detail Toko (Tab Visit, Brand, Trade Promo, Ecosystem) REE

  Scenario Outline: As a REE user, I can see Daftar Kunjungan Toko
    Given I am on the Home page
    When I click menu Outlet Base
    Then system should be leading to Outlet Base page

    Given I am on the Outlet Base page
    When I search and click retailer
    Then system should be show retailer details