Feature: [HERO] 09. Open Details when Mission Status End

  Scenario Outline: As a user, I can open details of mission that has been ended

    Given I am on the Home page
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I search for <toko> then click dropdown View All on mission with status Berakhir and click Details
    Then system should be leading to Mission Details page

    Examples:
        | toko    |
        | AYAM    |
        #| weekend |