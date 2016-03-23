import controlQuestions from './controlQuestions/controlQuestions';
import controlQuestionsCtrl from './controlQuestions/controlQuestionsCtrl';

angular.module('lessonProject.components', [])
    .component('controlQuestions', controlQuestions)
    .controller('controlQuestionsCtrl', controlQuestionsCtrl);