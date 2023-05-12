import { Given, When, Then } from '@cucumber/cucumber';
// import allureReporter from '@wdio/allure-reporter';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import OutletBaseScreen from '../../../screenobjects/beranda/outletbase/outletbaseScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click menu Outlet Base$/, async () => {
    await BerandaScreen.goToOutletBase();
});

Then(/^system should be leading to Outlet Base page$/, async () => {
    await OutletBaseScreen.pageSPV();
});

Given(/^I am on the Outlet Base page$/, async () => {    
    await OutletBaseScreen.searchRetailer({retailer: "AYAM GORENG"});
    await OutletBaseScreen.resetSearch();
    await OutletBaseScreen.searchRetailer({retailer: "TEG0007587"});
    await OutletBaseScreen.resetSearch();
    await OutletBaseScreen.searchRetailer({retailer: "AYAM BAKAR"});
    await OutletBaseScreen.okAlert();
    await OutletBaseScreen.resetSearch();
    await OutletBaseScreen.filter();
});

When(/^I search and click retailer/, async () => {
    await OutletBaseScreen.switchOOR();
    await OutletBaseScreen.switchOOR();
});

Then(/^system should be show retailer details$/, async () => {
    await OutletBaseScreen.checklistRetailer();
    await OutletBaseScreen.goToHome();
    await BerandaScreen.syncData();
    await BerandaScreen.OK();
});