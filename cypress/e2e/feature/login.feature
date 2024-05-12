Feature: Login test suite

Scenario: Login succesfull

Given I visit "https://www.saucedemo.com/"

When Start to type your When step here I write my username "standard_user"

When I write my password "secret_sauce"

Then Login is succesfull