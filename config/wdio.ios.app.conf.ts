// import { join } from 'path';
import config from './wdio.shared.local.appium.conf';
const { join } = require('path');
// const iosAppPath = join(process.cwd(), "app/AYO SRC HERO QA HMS 1-65.ipa");
// const { config } = require('./wdio.shared.local.appium.conf');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'iOS',
        // platformVersion: '8.1.0',
        maxInstances: 5,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        // 'appium:deviceType': 'phone',
        // "appium:browserVersion": "73.0-phone-1",

        // 'appium:deviceName': 'iPad mini 5 (Cellular)',
        "appium:deviceName": "iPad mini (6th generation)",
        // 'appium:platformVersion': '15.0.1',
        "appium:platformVersion": "16.2",
        // 'appium:udid': '00008020-000D10420E03802E',
        'appium:udid': '00008020-0015716934F9002E',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'XCUITest',

        // The path to the app
        // 'appium:app': join(process.cwd(), './apps/AYO SRC HERO.ipa'),
        // 'appium:appName': 'AYOHero-QA-30-Mar-2022.ipa',
        // @ts-ignore
        'appium:appActivity': '.MainActivity',
        'appium:appPackage': 'com.pmi.limited.PMIAPPM05725.wknd.qa',
        //version 2.23
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        // 'appium:noReset': true,
        // 'appium:fullReset': true, //false
        'appium:newCommandTimeout': 240,
        // 'autoGrantPermissions': true,
    },
];

exports.config = config;