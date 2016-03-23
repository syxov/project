require('angular');
require('lodash');
require('bootstrap/dist/css/bootstrap.min.css');
require('angular-bootstrap');
require('jquery');
require('angular-ui-router');

angular.module('ownProject', [
    'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/',
            template: require('./pages/index/index.html')
        });
});

$(function () {
    angular.bootstrap(document.body, ['ownProject']);
});
