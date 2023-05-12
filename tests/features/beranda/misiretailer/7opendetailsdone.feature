Feature: [HERO] 07. Open Details when Mission Status Done or Approved

  Scenario Outline: As a user, I can open details of mission that has been approved

    Given I am on the Home page
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I search for <toko> then click dropdown View All and click Details
    Then system should be leading to Mission Details page

    Examples:
        | toko    |
        | AYAM    |
        #| weekend |