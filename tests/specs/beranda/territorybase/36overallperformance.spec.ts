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

When(/^I view Overall Performance$/, async () => {
    await TerritoryBaseScreen.searchREE({toko: "AYAM GORENG"});
    await TerritoryBaseScreen.clearSearch();
    await TerritoryBaseScreen.klikSearch();
    await driver.pause(3000);
});

Then(/^system should be show Overall Performance$/, async () => {
    await TerritoryBaseScreen.filterForREE();
    await TerritoryBaseScreen.showMore();
});