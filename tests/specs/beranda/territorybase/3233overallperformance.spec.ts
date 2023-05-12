import { Given, When, Then } from '@cucumber/cucumber';
// import allureReporter from '@wdio/allure-reporter';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import TerritoryBaseScreen from '../../../screenobjects/beranda/territorybase/territorybaseScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click menu Territory Base$/, async () => {
    await BerandaScreen.goToTerritoryBase();
});

Then(/^system should be leading to Territory Base page$/, async () => {
    await TerritoryBaseScreen.page();
});

When(/^I view Overall Performance$/, async () => {
    await TerritoryBaseScreen.search({code: "TPPW008"});
});

Then(/^system should be show Overall Performance$/, async () => {
    await TerritoryBaseScreen.showPresentage();
    await TerritoryBaseScreen.clearSearch();
    await TerritoryBaseScreen.filterKPS();
});