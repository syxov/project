require('angular');
require('angular-sanitize');
require('lodash');
require('bootstrap/dist/css/bootstrap.min.css');
require('angular-bootstrap');
require('jquery');
require('angular-ui-router');
require('./pages/module');
require('./config/module');
require('./components/module');
require('./styles/source.less');

angular.module('lessonProject', [
    'lessonProject.config',
    'lessonProject.pages',
    'lessonProject.components',
    'ui.router',
    'ngSanitize',
    'ui.bootstrap'
]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index', {
            url: '/',
            template: require('./pages/index/index.html'),
            controller: 'indexCtrl',
            controllerAs: '$ctrl'
        })
        .state('lesson', {
            url: '/lesson?sectionId&lessonId',
            template: require('./pages/lesson/lesson.html'),
            controller: 'lessonCtrl',
            controllerAs: '$ctrl'
        });
});

$(function () {
    angular.bootstrap(document.body, ['lessonProject']);
});
