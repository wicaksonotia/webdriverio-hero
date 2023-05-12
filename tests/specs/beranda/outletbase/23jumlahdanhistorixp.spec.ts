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
    await OutletBaseScreen.page();
});

Given(/^I am on the Outlet Base page$/, async () => {    
    await OutletBaseScreen.okAlert();
});

When(/^I search and click retailer/, async () => {
    await OutletBaseScreen.switchOOR();
    await OutletBaseScreen.searchRetailer({retailer: "AYAM GORENG"});
    await OutletBaseScreen.selectRetailer();
    await OutletBaseScreen.closeDrawer();
});

Then(/^system should be show retailer details$/, async () => {
    await OutletBaseScreen.openXPHistory();
});