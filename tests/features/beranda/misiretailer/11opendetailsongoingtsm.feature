Feature: [HERO] 11. Open Details on On Going TSM

  Scenario Outline: As a user, I can open details on on going TSM

    Given I am on the Home page
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I search for <toko> then click dropdown View All on mission with timeline status Sedang Berjalan
    Then system should be show the mission hierarchy

    When I click Details
    Then system should be leading to Mission Details page

    Examples:
        | toko    |
        | AYAM    |
        #| weekend |