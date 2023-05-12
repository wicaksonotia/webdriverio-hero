Feature: [HERO] 01. LOGIN

  Scenario Outline: As a user, I can sign in into the AYO SRC Apps

    Given I am on the First page
    When I click button MASUK
    Then system should be leading to Input Email page

    Given I am on the Input Email page
    When I input email and click button Next
    Then system should be leading to Login page

    Given I am on the Login page
    When I input password and click button Sign in
    Then system should be leading to Verify Identity page
    
    Given I am on the Verify Identity page
    When I click Text XXXXXXXXXX85, enter code and click button Verify
    Then system should be leading to Stay Signed In page
    
    Given I am on the Stay Signed In page
    When I click button Yes
    #Then system should be leading to Sign In page
    
    #Given I am on the Sign In page
    #When I click button ayo-hero-qa
    Then system should be leading to Home page

    Examples:
      | email               | password       |
      | sutrujah@pmintl.net | !Sampoerna2022 |
