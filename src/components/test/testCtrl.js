export default function testCtrl($scope, $uibModal) {
    this.questionPart = true;
    this.activeQuestion = this.questions[0];

    this.selectQuestion = function (question) {
        this.activeQuestion = question;
    };

    this.endTest = function () {
        if (this.userAnsweredOnAllQuestions()) {
            this.questionPart = false;
            $scope.$emit('testEnded');
        } else {
            $uibModal.open({
                template: require('./popup/popup.html'),
                bindToController: true,
                controllerAs: '$ctrl',
                controller: 'popupCtrl'
            }).result.then(() => {
                this.questionPart = false;
                $scope.$emit('testEnded');
            });
        }
    };

    this.isLastQuestionSelected = function () {
        return this.activeQuestion === _.last(this.questions);
    };

    this.selectNextQuestion = function () {
        this.activeQuestion = this.questions[this.questions.indexOf(this.activeQuestion) + 1];
    };

    this.userAnsweredOnAllQuestions = function () {
        return _.every(this.questions, question => this.userAnsweredSmth(question));
    };

    this.userAnsweredSmth = function (question) {
        return question.answers.some(({ userSelect }) => userSelect);
    };

    $scope.$watch(
        () => this.questions,
        () => {
            const activeQuestionIndex = this.questions.indexOf(this.activeQuestion);
            this.questions = angular.copy(this.questions);
            this.activeQuestion = this.questions[activeQuestionIndex];
        },
        true
    );

    $scope.$emit('testStarted');
}
