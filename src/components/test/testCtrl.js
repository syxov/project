testCtrl.$inject = ['$uibModal'];
export default function testCtrl(uibModal) {
    this.questionPart = true;
    this.activeQuestion = this.questions[0];
    this.selectQuestion = function (question) {
        this.activeQuestion = question;
    };

    this.endTest = function () {
        if (this.userAnsweredOnAllQuestions()) {
            this.questionPart = false;
        } else {
            uibModal.open({
                template: require('./popup/popup.html'),
                bindToController: true,
                controllerAs: '$ctrl',
                controller: 'popupCtrl'
            }).result.then(() => this.questionPart = false);
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
        return question.answers.some(function (answer) {
            return answer.userSelect;
        });
    };
}
