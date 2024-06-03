import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPage } from "../pages/commonPage"

let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
    commonPage.visitLink(url);
});

When("I write my username {string}", () =>{
  commonPage.writeUsername("standard_user")
});

When("I write my pasword {string}", ()=>{
  commonPage.writePassword()
});

When("I check that the text {string} appears", (Text) =>{
  commonPage.containText(Text)
});