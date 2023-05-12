import { Given, When, Then } from '@cucumber/cucumber';
// import allureReporter from '@wdio/allure-reporter';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import MisiRetailerScreen from '../../../screenobjects/beranda/misiretailer/misiretailerScreen';

Given(/^I am on the Home page$/, async () => {
    // await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click button SINKRONASI GSM$/, async () => {
    await BerandaScreen.syncGSM();
});

Then(/^system should be able to show pop-up message "Sinkronasi GSM Berhasil"$/, async () => {
    await BerandaScreen.OK();
});

When(/^I click card Misi Retailer$/, async () => {
    await BerandaScreen.menuMisiRetailer()
});

Then(/^system should be leading to Misi Retailer page$/, async () => {
    // await MisiRetailerScreen.waitForIsShown(true);
});

Given(/^I am on the Misi Retailer page$/, async () => {
    await MisiRetailerScreen.page();
});

When(/^I search for weekend and click tab B2B$/, async () => {
    // await MisiRetailerScreen.search({toko: 'weekend'});
    await MisiRetailerScreen.B2BGSM()
});

Then(/^system should be show list of product to order$/, async () => {
    await MisiRetailerScreen.productList();
});

When(/^I choose product to order and click button Submit$/, async () => {
    await MisiRetailerScreen.order()
});

Then(/^system should be able to show pop-up message "SUCCESS"$/, async () => {
    await MisiRetailerScreen.OK()
});