Feature: Visit Main Page

Scenario: Main page is visible

Given I visit "https://curso.testautomation.es/"
When I click on "FruitVegetablesShop"
Then I check that the text "apple" appears