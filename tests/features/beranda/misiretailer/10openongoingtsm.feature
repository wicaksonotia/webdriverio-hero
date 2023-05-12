Feature: [HERO] 10. Open TSM that Still On Going

  Scenario Outline: As a user, I can open TSM that still on going

    Given I am on the Home page
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I search for <toko> then click dropdown View All on mission with timeline status Sedang Berjalan
    Then system should be show the mission hierarchy

    Examples:
        | toko    |
        | AYAM    |
        #| weekend |