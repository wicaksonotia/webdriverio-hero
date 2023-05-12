Feature: [HERO] 16. Detail Tab B2C

  Scenario Outline: As a user, I can see the details of B2C tab

    Given I am on the Home page
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I search for <toko> then click tab B2C
    Then system should be show the details of B2C tab

Examples:
        | toko    |
        #| AYAM    |
        | weekend |