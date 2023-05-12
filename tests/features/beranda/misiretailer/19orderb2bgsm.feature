Feature: [HERO] 19. Order B2B GSM Field Force

  Scenario Outline: As a user, I can order product to retailer

    Given I am on the Home page
    When I click button SINKRONASI GSM
    Then system should be able to show pop-up message "<pop-upMessage1>"
    
    When I click card Misi Retailer
    Then system should be leading to Misi Retailer page

    Given I am on the Misi Retailer page
    When I search for <toko> and click tab B2B
    Then system should be show list of product to order

    When I choose product to order and click button Submit
    Then system should be able to show pop-up message "<pop-upMessage2>"

    Examples:
        | toko    | pop-upMessage1          | pop-upMessage2 |
        #| AYAM    | Sinkronasi GSM Berhasil | SUCCESS        |
        | weekend | Sinkronasi GSM Berhasil | SUCCESS        |