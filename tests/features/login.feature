Feature: WebdriverIO and Appium, when interacting with a login form

  Scenario Outline: As a user, I can login in into Wdio apps

    Given I am on the login page Wdio apps
    When I login
    Then should be able login successfully