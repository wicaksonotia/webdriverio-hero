Feature: [HERO] 22. Do Task Based Response Mission

  Scenario Outline: As a user, I can do task based response mission

    Given I am on the Home page
    When I click card Misi untuk SRC Coach
    Then system should be leading to Misi untuk SRC Coach page

    Given I am on the Misi untuk SRC Coach page
    When I search for <toko> then click dropdown View All and click Details
    Then system should be leading to Mission Details page

    Given I am on the Mission Details page
    When I answer all the questions then click button Kirim
    Then system should be able to show pop-up message "<pop-upMessage1>"

    When I check mission status
    Then system should be have status Misi Disetujui

    When I click button back and click button SINKRONISASI DATA
    Then system should be able to show pop-up message "<pop-upMessage2>"

    Examples:
        | toko        | pop-upMessage1         | pop-upMessage2           |
        #| Hanifah     | Misi telah di approve. | Sinkronisasi Data Berhasil |
        | AYAM        | Misi telah di approve. | Sinkronisasi Data Berhasil |
        #| weekend     | Misi telah di approve. | Sinkronisasi Data Berhasil |