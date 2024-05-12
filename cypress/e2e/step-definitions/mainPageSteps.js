import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../pages/mainPage"

let mainPage = new MainPage();


When("I click on {string}", (linkName) =>{
    mainPage.clickLink(linkName);
});

Then("I can see fruits and vegetables", ()=>{

});