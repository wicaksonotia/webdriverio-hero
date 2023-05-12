const video = require('wdio-video-reporter');
// const allure = require('allure-commandline');
// const { generate } = require('multiple-cucumber-html-reporter');
// const { removeSync } = require('fs-extra');
// import { After, Status } from '@cucumber/cucumber';

export const config: WebdriverIO.Config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or on a remote machine).
    runner: 'local',
    //
    // ============
    // Capabilities
    // ============
    // The capabilities are specified in:
    // - wdio.android.app.conf.ts
    capabilities: [
        // {
        // 'cjson:metadata': {
        //     app: {
        //         name: 'ayotoko-QA-4-11-2021-V.2.23.apk',
        //         version: '2.23',
        //     },
        //     device: 'Lenovo ThinkPad',
        //     platform: {
        //         name: 'Windows 10 Pro',
        //         version: '21H1',
        //     }
        // }}
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'error',
    //     '@wdio/appium-service': 'error'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'https://hms.qa.src.id/',
    // Default timeout for all waitFor* commands.
    /**
     * NOTE: This has been increased for more stable Appium Native app
     * tests because they can take a bit longer.
     */
    waitforTimeout: 60000,
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 3,
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    //
    // Services are empty here but will be defined in the
    // - wdio.shared.browserstack.conf.ts
    // - wdio.shared.local.appium.conf.ts
    // - wdio.shared.sauce.conf.ts
    // configuration files
    // services: [
    //     [
    //         "appium",
    //         {
    //             args: {
    //                 address: 'localhost',
    //                 port: 4444
    //             },
    //             logPath: './',
    //             command: 'appium'
    //         }
    //     ]
    // ],
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: [
        ["spec", {
            symbols: {
                passed: '[PASS]',
                failed: '[FAIL]',
            },
            addConsoleLogs: true,
        }],
        // ['cucumberjs-json', {
        //     jsonFolder: './reports/cucumberjs-json/json',
        //     language: 'en',
        // }],
        // [video, {
        //     outputDir: './reports/video',
        //     saveAllVideos: true,        // If true, also saves videos for successful test cases
        //     videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
        //     videoRenderTimeout: 60000,
        // }],
        // ['allure', {
        //     outputDir: './allure-results',
        //     disableWebdriverStepsReporting: false,
        //     disableWebdriverScreenshotsReporting: false,
        //     useCucumberStepReporter: false,
        //     addConsoleLogs: true,
        // }],
    ],
    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        // './tests/features/auth/1login.feature'
        // './tests/features/beranda/2syncdata.feature'
        // './tests/features/beranda/3syncgsm.feature'
        // './tests/features/beranda/misiretailer/4approvemission.feature'
        // './tests/features/beranda/misiretailer/7opendetailsdone.feature'
        // './tests/features/beranda/misiretailer/5rejectmission.feature'
        // './tests/features/beranda/misiretailer/8opendetailsrejected.feature'
        // './tests/features/beranda/misiretailer/6approvematerialmission.feature'
        // './tests/features/beranda/misiretailer/10openongoingtsm.feature'
        // './tests/features/beranda/misiretailer/11opendetailsongoingtsm.feature'
        // './tests/features/beranda/misiretailer/9opendetailsend.feature'
        // './tests/features/beranda/misiretailer/12openexpiredtsm.feature'
        // './tests/features/beranda/misiretailer/14submitmisinonregisteredsrc.feature'
        // './tests/features/beranda/misiretailer/15detailtabb2b.feature'
        // './tests/features/beranda/misiretailer/16detailtabb2c.feature'
        // './tests/features/beranda/misiretailer/17detailtabdte.feature'
        // './tests/features/beranda/misiretailer/18detailtabpaguyuban.feature'
        // './tests/features/beranda/misiretailer/19detailtabpartnership.feature'
        // './tests/features/beranda/misiretailer/19orderb2bgsm.feature'
        // './tests/features/beranda/misiretailer/20detailtabprogram.feature'
        // './tests/features/beranda/misiretailer/26missionxp.feature'
        // './tests/features/beranda/misiretailer/26missionnonxp.feature'
        // './tests/features/beranda/21homepageanalytics.feature'
        './tests/features/beranda/misisrccoach/13submitmisisrccoach.feature'
        // './tests/features/beranda/misisrccoach/16doquizmission.feature'
        // './tests/features/beranda/misisrccoach/22dotaskbasedresponsemission.feature'
        // './tests/features/beranda/outletbase/23jumlahdanhistorixp.feature'
        // './tests/features/beranda/outletbase/24missionclickable.feature'
        // './tests/features/beranda/outletbase/25detailmissionnonxp.feature'
        // './tests/features/beranda/outletbase/25detailmissionxp.feature'
        // './tests/features/beranda/outletbase/30daftarkunjungantoko.feature'
        // './tests/features/beranda/outletbase/31detailoutlet.feature'
        // './tests/features/beranda/outletbase/39daftarkunjungantoko.feature'
        // './tests/features/beranda/outletbase/40detailoutlet.feature'
        // './tests/features/beranda/outletbase/41detailoutlet.feature'
        // './tests/features/beranda/territorybase/27overallperformance.feature'
        // './tests/features/beranda/territorybase/28bykpitrend.feature'
        // './tests/features/beranda/territorybase/29summary.feature'
        // './tests/features/beranda/territorybase/3233overallperformance.feature'
        // './tests/features/beranda/territorybase/3435bykpitrend.feature'
        // './tests/features/beranda/territorybase/36overallperformance.feature'
        // './tests/features/beranda/territorybase/37bykpitrend.feature'
        // './tests/features/beranda/territorybase/38summary.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'test/spec/multibrowser/**',
        // './tests/features/auth/1login.feature'
    ],
    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: [
            // './tests/specs/auth/1login.spec.ts'
            // './tests/specs/beranda/2syncdata.spec.ts'
            // './tests/specs/beranda/3syncgsm.spec.ts'
            // './tests/specs/beranda/misiretailer/4approvemission.spec.ts'
            // './tests/specs/beranda/misiretailer/7opendetailsdone.spec.ts'
            // './tests/specs/beranda/misiretailer/5rejectmission.spec.ts'
            // './tests/specs/beranda/misiretailer/8opendetailsrejected.spec.ts'
            // './tests/specs/beranda/misiretailer/6approvematerialmission.spec.ts'
            // './tests/specs/beranda/misiretailer/10openongoingtsm.spec.ts'
            // './tests/specs/beranda/misiretailer/11opendetailsongoingtsm.spec.ts'
            // './tests/specs/beranda/misiretailer/9opendetailsend.spec.ts'
            // './tests/specs/beranda/misiretailer/12openexpiredtsm.spec.ts'
            // './tests/specs/beranda/misiretailer/14submitmisinonregisteredsrc.spec.ts'
            // './tests/specs/beranda/misiretailer/15detailtabb2b.spec.ts'
            // './tests/specs/beranda/misiretailer/16detailtabb2c.spec.ts'
            // './tests/specs/beranda/misiretailer/17detailtabdte.spec.ts'
            // './tests/specs/beranda/misiretailer/18detailtabpaguyuban.spec.ts'
            // './tests/specs/beranda/misiretailer/19detailtabpartnership.spec.ts'
            // './tests/specs/beranda/misiretailer/19orderb2bgsm.spec.ts'
            // './tests/specs/beranda/misiretailer/20detailtabprogram.spec.ts'
            // './tests/specs/beranda/misiretailer/26missionxp.spec.ts'
            // './tests/specs/beranda/misiretailer/26missionnonxp.spec.ts'
            // './tests/specs/beranda/21homepageanalytics.spec.ts'
            './tests/specs/beranda/misisrccoach/13submitmisisrccoach.spec.ts'
            // './tests/specs/beranda/misisrccoach/16doquizmission.spec.ts'
            // './tests/specs/beranda/misisrccoach/22dotaskbasedresponsemission.spec.ts'
            // './tests/specs/beranda/outletbase/23jumlahdanhistorixp.spec.ts'
            // './tests/specs/beranda/outletbase/24missionclickable.spec.ts'
            // './tests/specs/beranda/outletbase/25detailmissionnonxp.spec.ts'
            // './tests/specs/beranda/outletbase/25detailmissionxp.spec.ts'
            // './tests/specs/beranda/outletbase/30daftarkunjungantoko.spec.ts'
            // './tests/specs/beranda/outletbase/31detailoutlet.spec.ts'
            // './tests/specs/beranda/outletbase/39daftarkunjungantoko.spec.ts'
            // './tests/specs/beranda/outletbase/40detailoutlet.spec.ts'
            // './tests/specs/beranda/outletbase/41detailoutlet.spec.ts'
            // './tests/specs/beranda/territorybase/27overallperformance.spec.ts'
            // './tests/specs/beranda/territorybase/28bykpitrend.spec.ts'
            // './tests/specs/beranda/territorybase/29summary.spec.ts'
            // './tests/specs/beranda/territorybase/3233overallperformance.spec.ts'
            // './tests/specs/beranda/territorybase/3435bykpitrend.spec.ts'
            // './tests/specs/beranda/territorybase/36overallperformance.spec.ts'
            // './tests/specs/beranda/territorybase/37bykpitrend.spec.ts'
            // './tests/specs/beranda/territorybase/38summary.spec.ts'
        ],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: ['@wdio/types'],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 720000,
        // timeout: 3 * 60 * 1000, // 3min
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false,
        /*failAmbiguousDefinitions: false,
        name: [],
        profile: [],
        snippetSyntax: undefined,
        tagsInTitle: false,
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        scenarioLevelReporter: false // Enable this to make webdriver.io behave as if scenarios and not steps were the tests.*/
        retry: 0
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    // onPrepare: () => {
    //     // Remove the `.tmp/` folder that holds the json and report files
    //     removeSync('./reports/cucumberjs-json/');
    //   },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Cucumber Hooks
     *
     * Runs before a Cucumber Feature.
     * @param {String}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // beforeFeature: function (uri, feature) {
    // },
    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world world object containing information on pickle and test step
     */
    // beforeScenario: function (world) {
    // },
    /**
     *
     * Runs before a Cucumber Step.
     * @param {Pickle.IPickleStep} step     step data
     * @param {IPickle}            scenario scenario pickle
     */
    // beforeStep: function (step, scenario) {
    // },
    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step     step data
     * @param {IPickle}            scenario scenario pickle
     * @param {Object}             result   results object containing scenario results
     * @param {boolean}            result.passed   true if scenario has passed
     * @param {string}             result.error    error stack if scenario failed
     * @param {number}             result.duration duration of scenario in milliseconds
     */
    // afterStep: function (step, scenario, result) {
    // },
    // afterStep: function (test, scenario, { error, duration, passed }) {
    //     if (error) {
    //       browser.takeScreenshot();
    //       var date = Date.now();
    //       browser.saveScreenshot('./reports/screenshots/afterstep - '+date+'.png');
    //       // browser.saveScreenshot('./reports/screenshots/'+scenario+'-'+step+'-'+result+'-'+date+'.png');
    //       cucumberJson.attach(browser.takeScreenshot(), 'image/png');
    //     }
    // },
    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world  world object containing information on pickle and test step
     * @param {Object}                 result results object containing scenario results
     * @param {boolean}                result.passed   true if scenario has passed
     * @param {string}                 result.error    error stack if scenario failed
     * @param {number}                 result.duration duration of scenario in milliseconds
     */
    // afterScenario: function (world, result) {
    // },
    /**
     *
     * Runs after a Cucumber Feature.
     * @param {String}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // afterFeature: function (uri, feature) {
    // },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    // after: (function (scenarioResult) {
    //     if (Number(scenarioResult.status) === Status.FAILED) {
    //       // Attach the original state
    //       const screenshot = browser.saveScreenshot();
    //       world.attach(screenshot, 'image/png');
    //     }
    //     return Promise.resolve(scenarioResult.status));
    // }),
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    //     generate({
    //         jsonDir: './reports/cucumberjs-json/json',
    //         reportPath: './reports/cucumberjs-json/html',
    //         openReportInBrowser: true
    //     });
    // },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}


};

