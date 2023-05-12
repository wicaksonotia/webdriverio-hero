Feature: [HERO] 03. AYO Hero GSM Synchronization

  Scenario Outline: As a user, I can sync GSM to get/update data on B2B-GSM tab

    Given I am on the Home page
    When I click button SINKRONISASI GSM
    Then system should be show pop-up message "<pop-upMessage>"

    Examples:
        | shopName       | pop-upMessage             |
        | Ai Astuti HERO | Sinkronisasi GSM Berhasil |