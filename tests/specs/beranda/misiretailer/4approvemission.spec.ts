import { Given, When, Then } from '@cucumber/cucumber';
import BerandaScreen from '../../../screenobjects/beranda/berandaScreen';
import MisiRetailerScreen from '../../../screenobjects/beranda/misiretailer/misiretailerScreen';
import DetailsScreen from '../../../screenobjects/beranda/misiretailer/detailsScreen';

Given(/^I am on the Home page$/, async () => {
    // await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click card Misi Retailer$/, async () => {
    await BerandaScreen.menuMisiRetailer();
});

Then(/^system should be leading to Misi Retailer page$/, async () => {
    // await MisiRetailerScreen.waitForIsShown(true);
});

Given(/^I am on the Misi Retailer page$/, async () => {
    await MisiRetailerScreen.page();
});

When(/^I search for weekend then click dropdown View All and click Details$/, async () => {
    await MisiRetailerScreen.search({ toko: 'WIRATANI' });
    await MisiRetailerScreen.scrollDown();
    await MisiRetailerScreen.viewAll();
    await MisiRetailerScreen.statusSebelum();
    await MisiRetailerScreen.openDetails();
});

Then(/^system should be leading to Mission Details page$/, async () => {
    // await DetailsScreen.waitForIsShown(true);
});

Given(/^I am on the Mission Details page$/, async () => {
    await DetailsScreen.page();
});

When(/^I click button Setujui$/, async () => {
    await DetailsScreen.approve();
});

Then(/^system should be able to show pop-up message "Misi telah di approve."$/, async () => {
    await MisiRetailerScreen.OK();
    await MisiRetailerScreen.statusDisetujui();
});

// When(/^I search for GORENG and click dropdown View All$/, async () => {
//     await MisiRetailerScreen.search({toko: 'GORENG'});
//     await MisiRetailerScreen.scrollDown();
//     await MisiRetailerScreen.viewAll();
// });

// Then(/^system should be have status Misi Disetujui$/, async () => {
//     await MisiRetailerScreen.statusDisetujui();
// });

When(/^I click button back and click button SINKRONISASI DATA$/, async () => {
    await MisiRetailerScreen.back();
    // await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
    await BerandaScreen.syncData();
});

Then(/^system should be able to show pop-up message "Sinkronisasi Data Berhasil"$/, async () => {
    await BerandaScreen.OK();
    // await BerandaScreen.OK();
});