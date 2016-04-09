export default function testCtrl($scope, $uibModal) {
    this.questionPart = true;
    this.activeQuestion = this.questions[0];

    this.selectQuestion = function (question) {
        this.activeQuestion = question;
    };

    this.endTest = function () {
        if (this.userAnsweredOnAllQuestions()) {
            this._reallyEndTest();
        } else {
            $uibModal.open({
                template: require('./popup/popup.html'),
                bindToController: true,
                controllerAs: '$ctrl',
                controller: 'popupCtrl'
            }).result.then(::this._reallyEndTest);
        }
    };

    this._reallyEndTest = function () {
        this.questionPart = false;
        this.percent = this._computePercent();
        $scope.$emit('testEnded');
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

    this._computePercent = function () {
        const result = this._computeCorrectAnswersCount() / this.questions.length * 100;
        return Number.isFinite(result) ? result : 0;
    };

    this._computeCorrectAnswersCount = function () {
        return this.questions.filter(function (question) {
            return question.answers.every(function (answer) {
                return (answer.userSelect === answer.isCorrect && answer.isCorrect === true) ||
                    (!answer.isCorrect && !answer.userSelect)
            });
        }).length;
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
