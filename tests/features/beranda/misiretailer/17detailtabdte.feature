Feature: [HERO] 17. Detail Tab DTE

  Scenario Outline: As a user, I can see the details of DTE tab

    Given I am on the Home page
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I search for <toko> then click tab DTE
    Then system should be show the details of DTE tab

    Examples:
        | toko    |
        #| AYAM    |
        | weekend |