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
    await TerritoryBaseScreen.pageREE();
});

When(/^I view By KPI Trend$/, async () => {
    await TerritoryBaseScreen.openTabByKPITrend();
    await TerritoryBaseScreen.showMore();
});

Then(/^system should be show By KPI Trend$/, async () => {
    await TerritoryBaseScreen.byKPITrendREE({code: "AYAM GORENG"});
    await TerritoryBaseScreen.filterHari();
});