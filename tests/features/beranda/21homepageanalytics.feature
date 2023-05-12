Feature: [HERO] 21. Homepage - Analytics B2B, B2C and DTE

  Scenario Outline: As a user, I can sync data to get/update data percentage of B2B, B2C and DTE

    Given I am on the Home page
    When I click button SINKRONASI DATA
    Then system should be show pop-up message "<pop-upMessage>"

    Examples:
        | shopName       | pop-upMessage            |
        | Ai Astuti HERO | Sinkronasi Data Berhasil |