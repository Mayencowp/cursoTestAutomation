@smoke
Feature: Click on chart button

Scenario: Button cart is visible and enable

Given I visit "https://curso.testautomation.es/"
When I click on "FruitVegetablesShop"
And Cart button is visible and enable
And I click on Cart Button
Then Modal its shown
