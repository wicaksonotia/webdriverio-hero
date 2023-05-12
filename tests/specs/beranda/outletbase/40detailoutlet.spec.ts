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
});

When(/^I search and click retailer/, async () => {
    await OutletBaseScreen.selectRetailer();
});

Then(/^system should be show retailer details$/, async () => {
    await OutletBaseScreen.closeDrawer();
    await OutletBaseScreen.detailRetailer();
    await OutletBaseScreen.editNotes({notes: "Test Notes"});
    await OutletBaseScreen.openCoinHistory();
    await OutletBaseScreen.checklistCTA();
    await OutletBaseScreen.goToHome();
    await BerandaScreen.syncData();
    await BerandaScreen.OK();
});