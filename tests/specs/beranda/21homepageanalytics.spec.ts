import { Given, When, Then } from '@cucumber/cucumber';
// import allureReporter from '@wdio/allure-reporter';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click button SINKRONASI DATA$/, async () => {
    await BerandaScreen.syncData();
});

Then(/^system should be show pop-up message "Sinkronasi Data Berhasil"$/, async () => {
    // await BerandaScreen.OK();
    await BerandaScreen.OK();
    await BerandaScreen.analytics();
    await BerandaScreen.page();
});