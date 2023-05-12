Feature: [HERO] 15. Detail Tab B2B

  Scenario Outline: As a user, I can see the details of B2B tab

    Given I am on the Home page
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I search for <toko> then click tab B2B
    Then system should be show the details of B2B GSM and GSR tab

    Examples:
        | toko    |
        #| AYAM    |
        | weekend |