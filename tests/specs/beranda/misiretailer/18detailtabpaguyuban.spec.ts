import { Given, When, Then } from '@cucumber/cucumber';
// import allureReporter from '@wdio/allure-reporter';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import MisiRetailerScreen from '../../../screenobjects/beranda/misiretailer/misiretailerScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click card Misi Retailer$/, async () => {
    await BerandaScreen.menuMisiRetailer();
});

Then(/^system should be leading to Misi Retailer page$/, async () => {
    await MisiRetailerScreen.waitForIsShown(true);
});

Given(/^I am on the Misi Retailer page$/, async () => {    
    await MisiRetailerScreen.page();
});

When(/^I search for weekend then click tab Paguyuban$/, async () => {
    // await MisiRetailerScreen.search({toko: 'weekend'});
});

Then(/^system should be show the details of Paguyuban tab$/, async () => {
    await MisiRetailerScreen.Paguyuban();
});