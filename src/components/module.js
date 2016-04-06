import controlQuestions from './controlQuestions/controlQuestions';
import controlQuestionsCtrl from './controlQuestions/controlQuestionsCtrl';
import test from './test/test';
import testCtrl from './test/testCtrl';

angular.module('lessonProject.components', [])
    .component('controlQuestions', controlQuestions)
    .controller('controlQuestionsCtrl', controlQuestionsCtrl)
    .component('test', test)
    .controller('testCtrl', testCtrl);