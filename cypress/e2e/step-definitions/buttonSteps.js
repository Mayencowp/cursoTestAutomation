import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPage } from "../pages/commonPage"
import { MainPage } from "../pages/mainPage";

let mainPage = new MainPage();
let commonPage = new CommonPage();

When("I click on {string}", (linkName) =>{
    mainPage.clickLink(linkName);
});

Then("Cart button is visible", () =>{
    commonPage.cartIcon();
})

Then("Modal can not be visible", () =>{
    commonPage.cartModalNotVisible();
})

Then("I click on Cart button", ()=>{
    commonPage.clickCartIcon();
})







