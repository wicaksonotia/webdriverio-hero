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

When(/^I view By KPI Trend$/, async () => {
    await TerritoryBaseScreen.openTabByKPITrend();
});

Then(/^system should be show By KPI Trend$/, async () => {
    await TerritoryBaseScreen.byKPITrendSPV({code1: "TPPW005", code2: "Sibolga 005", code3: "Sibolga 5"});
    await TerritoryBaseScreen.showPresentageKPI();
    await TerritoryBaseScreen.showPresentageKPI();
});