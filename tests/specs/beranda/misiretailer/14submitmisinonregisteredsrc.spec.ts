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
    await MisiRetailerScreen.pick1();
    // await MisiRetailerScreen.search({toko: 'CITY'});
});

When(/^I click dropdown View All and click Details$/, async () => {
    await MisiRetailerScreen.scrollDown();
    await MisiRetailerScreen.viewAll();
    await MisiRetailerScreen.openDetails();
});

Then(/^system should be leading to Mission Details page$/, async () => {
    await DetailsScreen.waitForIsShown(true);
});

Given(/^I am on the Mission Details page$/, async () => {    
    await DetailsScreen.page();
});

When(/^I answer all the questions and click button Kirim$/, async () => {
    await DetailsScreen.submitMission({answer: 'Jawaban'});
});

Then(/^system should be able to show pop-up message "Misi telah di approve."$/, async () => {
    await MisiRetailerScreen.OK();
});

When(/^I click button back and click button SINKRONISASI DATA$/, async () => {
    await MisiRetailerScreen.back();
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.syncData();
});

Then(/^system should be able to show pop-up message "Sinkronasi Data Berhasil"$/, async () => {
    await BerandaScreen.OK();
    // await BerandaScreen.OK();
});

When(/^I check mission status$/, async () => {
    await BerandaScreen.menuMisiRetailer();
    await MisiRetailerScreen.waitForIsShown(true);
    await MisiRetailerScreen.pick2();
    // await MisiRetailerScreen.search({toko: 'CITY'});
    await MisiRetailerScreen.scrollDown();
    await MisiRetailerScreen.viewAll();
});

Then(/^system should be have status Misi Disetujui$/, async () => {
    await MisiRetailerScreen.openDetails();
    await DetailsScreen.waitForIsShown(true);
    await DetailsScreen.page();
});