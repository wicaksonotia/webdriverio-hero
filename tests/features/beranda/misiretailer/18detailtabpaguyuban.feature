Feature: [HERO] 18. Detail Tab Paguyuban

  Scenario Outline: As a user, I can see the details of Paguyuban tab

    Given I am on the Home page
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I search for <toko> then click tab Paguyuban
    Then system should be show the details of Paguyuban tab

    Examples:
        | toko    |
        #| AYAM    |
        | weekend |