Feature: Login test suite

Scenario: Login Standard user and valid password
  Given I visit "https://www.saucedemo.com/"
  When I type standard_user on the Username credential input
  And I type secret_sauce on the password credential input
  Then I click on the login button

Scenario: Login Locked Out User and valid password
  Given I visit "https://www.saucedemo.com/"
  When I type Locked_Out_User on the Username credential input
  And I type secret_sauce on the password credential input
  Then I click on the login button
