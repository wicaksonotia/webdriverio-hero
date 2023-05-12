Feature: [HERO] 02. AYO Hero Data Synchronization

  Scenario Outline: As a user, I can sync data to get/update the number of missions

    Given I am on the Home page
    When I click button SINKRONISASI DATA
    Then system should be show pop-up message "<pop-upMessage>"

    Examples:
        | shopName       | pop-upMessage            |
        | Ai Astuti HERO | Sinkronisasi Data Berhasil |