import indexCtrl from './index/indexCtrl';
import lessonCtrl from './lesson/lessonCtrl';

angular.module('lessonProject.pages', [])
    .controller('indexCtrl', indexCtrl)
    .controller('lessonCtrl', lessonCtrl);