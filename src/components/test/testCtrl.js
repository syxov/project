testCtrl.$inject = [];
export default function testCtrl() {
    this.questionPart = true;
    this.activeQuestion = this.questions[0];
    this.selectQuestion = function (question) {
        this.activeQuestion = question;
    };

    this.endTest = function () {
        this.questionPart = false;
    };
}
