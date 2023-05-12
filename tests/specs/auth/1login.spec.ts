import { Given, When, Then } from '@cucumber/cucumber';
import FirstScreen from '../../screenobjects/auth/firstScreen';
import InputEmailScreen from '../../screenobjects/auth/inputemailScreen';
import InputPasswordScreen from '../../screenobjects/auth/inputpasswordScreenScreen';
import VerifyIdentityScreen from '../../screenobjects/auth/verifyidentityScreen';
import StaySignedIn from '../../screenobjects/auth/staysignedinScreen';
import SignInScreen from '../../screenobjects/auth/signinScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';

Given(/^I am on the First page$/, async () => {
    await FirstScreen.page();
});

When(/^I click button MASUK$/, async () => {
    await FirstScreen.masuk();
});

Then(/^system should be leading to Input Email page$/, async () => {
    await InputEmailScreen.waitForIsShown(true);
});

Given(/^I am on the Input Email page$/, async () => {
    await InputEmailScreen.page();
});

When(/^I input email and click button Next$/, async () => {
    await InputEmailScreen.inputEmail({ email: 'sutrujah@pmintl.net' });
    await InputEmailScreen.next();
});

Then(/^system should be leading to Login page$/, async () => {
    await InputPasswordScreen.waitForIsShown(true);
});

Given(/^I am on the Login page$/, async () => {
    await InputPasswordScreen.page();
});

When(/^I input password and click button Sign in$/, async () => {
    await InputPasswordScreen.inputPassword({ password: '!Samalia123' });
    await InputPasswordScreen.signIn();
});

Then(/^system should be leading to Verify Identity page$/, async () => {
    await VerifyIdentityScreen.waitForIsShown(true);
});

Given(/^I am on the Verify Identity page$/, async () => {
    await VerifyIdentityScreen.page();
});

When(/^I click Text XXXXXXXXXX85, enter code and click button Verify$/, async () => {
    await VerifyIdentityScreen.getCode();
});

Then(/^system should be leading to Stay Signed In page$/, async () => {
    await StaySignedIn.waitForIsShown(true);
});

Given(/^I am on the Stay Signed In page$/, async () => {
    await StaySignedIn.page();
});

When(/^I click button Yes$/, async () => {
    await StaySignedIn.yes();
});

// Then(/^system should be leading to Sign In page$/, async () => {
//     await SignInScreen.waitForIsShown(true);
// });

// Given(/^I am on the Sign In page$/, async () => {    
//     await SignInScreen.page();
// });

// When(/^I click button ayo-hero-qa$/, async () => {
//     await SignInScreen.QA();
// });

Then(/^system should be leading to Home page$/, async () => {
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});