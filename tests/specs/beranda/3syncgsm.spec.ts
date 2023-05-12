import { Given, When, Then } from '@cucumber/cucumber';
// import allureReporter from '@wdio/allure-reporter';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click button SINKRONISASI GSM$/, async () => {
    await BerandaScreen.syncGSM();
});

Then(/^system should be show pop-up message "Sinkronisasi GSM Berhasil"$/, async () => {
    await BerandaScreen.OK();
});