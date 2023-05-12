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
    await TerritoryBaseScreen.pageSPV();
});

When(/^I view Overall Performance$/, async () => {
    await TerritoryBaseScreen.searchSPV({territory: "TPPW005"});
    await TerritoryBaseScreen.clearSearch();
    await TerritoryBaseScreen.klikSearch();
    await TerritoryBaseScreen.searchSPV({territory: "Sibolga 005"});
    await TerritoryBaseScreen.clearSearch();
    await TerritoryBaseScreen.searchSPV({territory: "Sibolga 5"});
    await TerritoryBaseScreen.clearSearch();
    await TerritoryBaseScreen.klikSearch();
});

Then(/^system should be show Overall Performance$/, async () => {
    await TerritoryBaseScreen.filterKPS();
    await TerritoryBaseScreen.showPresentage();
    await TerritoryBaseScreen.filterKPS();
});