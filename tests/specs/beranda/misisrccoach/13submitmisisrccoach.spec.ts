import { Given, When, Then } from '@cucumber/cucumber';
// import allureReporter from '@wdio/allure-reporter';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import MisiSRCCoachScreen from '../../../screenobjects/beranda/misisrccoach/misisrccoachScreen';
import DetailsScreen from '../../../screenobjects/beranda/misisrccoach/detailsScreen';

Given(/^I am on the Home page$/, async () => {
    // await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click card Misi untuk SRC Coach$/, async () => {
    await BerandaScreen.menuMisiuntukSRCCoach();
});

Then(/^system should be leading to Misi untuk SRC Coach page$/, async () => {
    // await MisiSRCCoachScreen.waitForIsShown(true);
});

Given(/^I am on the Misi untuk SRC Coach page$/, async () => {
    await MisiSRCCoachScreen.page();
});

When(/^I search for AYAM then click dropdown View All and click Details$/, async () => {
    // await MisiSRCCoachScreen.search({toko: 'weekend'});
    await MisiSRCCoachScreen.scrollDown();
    await MisiSRCCoachScreen.viewAll();
    await MisiSRCCoachScreen.openDetails();
});

Then(/^system should be leading to Mission Details page$/, async () => {
    // await DetailsScreen.waitForIsShown(true);
});

Given(/^I am on the Mission Details page$/, async () => {
    await DetailsScreen.page();
});

When(/^I answer all the questions then click button Kirim$/, async () => {
    await DetailsScreen.answer({ ans: 'Jawaban' });
});

Then(/^system should be able to show pop-up message "Misi telah di approve."$/, async () => {
    await MisiSRCCoachScreen.OK();
});

When(/^I check mission status$/, async () => {
    // await MisiSRCCoachScreen.search({toko: 'toko '});
    // await MisiSRCCoachScreen.scrollDown();
    // await MisiSRCCoachScreen.viewAll();
    await MisiSRCCoachScreen.openDetails();
});

Then(/^system should be have status Misi Disetujui$/, async () => {
    await DetailsScreen.page();
    await DetailsScreen.back();
});

When(/^I click button back and click button SINKRONISASI DATA$/, async () => {
    await MisiSRCCoachScreen.back();
    // await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.syncData();
});

Then(/^system should be able to show pop-up message "Sinkronisasi Data Berhasil"$/, async () => {
    await BerandaScreen.OK();
    // await BerandaScreen.OK();
});