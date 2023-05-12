Feature: [HERO] 08. Open Details when Mission Status Rejected

  Scenario Outline: As a user, I can open details of mission that has been rejected

    Given I am on the Home page
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I search for <toko> then click dropdown View All and click Selesai
    Then system should be leading to Mission Details page 

    Examples:
        | toko    |
        | AYAM    |
        #| weekend |