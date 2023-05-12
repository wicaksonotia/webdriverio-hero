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

When(/^I view Summary$/, async () => {
    await TerritoryBaseScreen.openTabSummary();
});

Then(/^system should be show Summary$/, async () => {
    await TerritoryBaseScreen.selectTerritory();
    // await TerritoryBaseScreen.OKAlert();
    await TerritoryBaseScreen.searchSPVSummary({kpi: "Actual Visit"});
    await TerritoryBaseScreen.clearSearch();
    await TerritoryBaseScreen.searchSPVSummary({kpi: "Brand AIR12 AV_Out"});
    await TerritoryBaseScreen.clearSearch();
    await TerritoryBaseScreen.searchSPVSummary({kpi: "Pojok Bayar"});
    await TerritoryBaseScreen.clearSearch();
    await TerritoryBaseScreen.klikSearch();
    await TerritoryBaseScreen.filterComply({toko: "SELLA"});
});