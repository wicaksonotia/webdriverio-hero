Feature: [HERO] 04. Approve a Mission

  Scenario Outline: As a user, I can approve a mission

    Given I am on the Home page
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I search for <tokoSearch1> then click dropdown View All and click Details
    Then system should be leading to Mission Details page

    Given I am on the Mission Details page
    When I click button Setujui
    Then system should be able to show pop-up message "<pop-upMessage1>"

    #When I search for <tokoSearch2> and click dropdown View All
    #Then system should be have status Misi Disetujui

    When I click button back and click button SINKRONISASI DATA
    Then system should be able to show pop-up message "<pop-upMessage2>"

    Examples:
        | tokoSearch1 | tokoSearch2 | pop-upMessage1         | pop-upMessage2             |
        #| Hanifah     | 25          | Misi telah di approve. | Sinkronisasi Data Berhasil |
        #| AYAM        | GORENG      | Misi telah di approve. | Sinkronisasi Data Berhasil |
        | weekend     | 2           | Misi telah di approve. | Sinkronisasi Data Berhasil |