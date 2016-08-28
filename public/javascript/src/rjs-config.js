var require = require.config({
    baseUrl: '/javascript/src/',
    waitSeconds: 0,
    context: 'cfo_pet_adoption_entry',
    paths: {
        "build-production": "app",
        "require-lib": "vendors/requirejs/require",
        "domReady": "vendors/domReady/domReady",
        "text": "vendors/text/text",
        "underscore": "vendors/lodash/dist/lodash",
        "moment": "vendors/moment/moment",
        "jquery-slick" : "vendors/slick/slick/slick",
        "async" : "vendors/async/dist/async",
        'ngApp': 'modules/ngApp',
        "jquery": "vendors/jquery",
        "angular": "vendors/angular",
        'ng-animate': 'vendors/angular-animate',
        'ng-aria': 'vendors/angular-aria',
        'ng-material': 'vendors/angular-material',
        'ng-messages': 'vendors/angular-messages',
        'ng-route': 'vendors/angular-route',
        'ng-sanitize': 'vendors/angular-sanitize',
        'ng-controllers': 'modules/controllers',
        'ng-directives': 'modules/directives',
        'ng-services': 'modules/services',
        'ng-router': 'modules/router'
    },
    shim: {
        "jquery-slick" : ["jquery"],
        "angular" : ["jquery"],
        "ng-animate": ["angular"],
        "ng-aria": ["angular"],
        "ng-route": ["angular"],
        "ng-sanitize": ["angular"],
        "ng-messages": ["angular"],
        "ng-material": ["ng-aria", "ng-messages", "ng-animate"]
    }
});