import { Given, When, Then } from '@cucumber/cucumber';
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

When(/^I search for weekend then click dropdown View All and click Details$/, async () => {
    await MisiRetailerScreen.search({toko: 'AYAM '});
    await MisiRetailerScreen.scrollDown();
    await MisiRetailerScreen.viewAll();
    await MisiRetailerScreen.openDetails();
});

Then(/^system should be leading to Mission Details page$/, async () => {
    await DetailsScreen.waitForIsShown(true);
    await DetailsScreen.detailMisiXP();
});