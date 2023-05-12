import { Given, When, Then } from '@cucumber/cucumber';
// import allureReporter from '@wdio/allure-reporter';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import MisiRetailerScreen from '../../../screenobjects/beranda/misiretailer/misiretailerScreen';
import DetailsScreen from '../../../screenobjects/beranda/misiretailer/detailsScreen';

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

When(/^I search for AYAM then click dropdown View All on mission with timeline status Sedang Berjalan$/, async () => {
    await MisiRetailerScreen.search({toko: 'AYAM'});
    await MisiRetailerScreen.scrollDown();
});

Then(/^system should be show the mission hierarchy$/, async () => {
    await MisiRetailerScreen.viewAll();
});

When(/^I click Details$/, async () => {
    await MisiRetailerScreen.openDetails();
});

Then(/^system should be leading to Mission Details page$/, async () => {
    await DetailsScreen.waitForIsShown(true);
    await DetailsScreen.page();
});