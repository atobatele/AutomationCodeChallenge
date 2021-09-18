
/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
import {Config} from 'protractor';

export let config: Config =  {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // baseUrl: 'https://www.way2automation.com/angularjs-protractor/banking/#/login/',

  capabilities: {
      browserName:'chrome'
  },

  framework: 'custom',  // set to "custom" instead of cucumber.

  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  ignoreUncaughtExceptions: true,
  specs: [
    '/**/*.feature'     // Specs here are the cucumber feature files
  ],

  // cucumber command line options
  cucumberOpts: {
    require: ['tmp/step-definitions/*.js'],  // require step definition files before executing features
    tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    strict: true,                  // <boolean> fail if there are any undefined or pending steps
    format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    'dry-run': false,              // <boolean> invoke formatters without executing steps
    compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  }


};
