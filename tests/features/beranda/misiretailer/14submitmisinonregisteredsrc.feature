Feature: [HERO] 14. Submit Mission by Non Registered SRC

  Scenario Outline: As a user, I can submit mission by non registered SRC

    Given I am on the Home page
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I click dropdown View All and click Details
    Then system should be leading to Mission Details page

    Given I am on the Mission Details page
    When I answer all the questions and click button Kirim
    Then system should be able to show pop-up message "<pop-upMessage1>"

    When I click button back and click button SINKRONISASI DATA
    Then system should be able to show pop-up message "<pop-upMessage2>"

    When I check mission status
    Then system should be have status Misi Disetujui

    Examples:
      | pop-upMessage1         | pop-upMessage2           |
      | Misi telah di approve. | Sinkronasi Data Berhasil |