Feature: [HERO] 12. Open TSM that Already Expired

  Scenario Outline: As a user, I can open TSM that already expired

    Given I am on the Home page
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I search for <toko> then click dropdown View All on mission with timeline status Berakhir
    Then system should be show the mission hierarchy

    Examples:
        | toko |
        | AYAM |