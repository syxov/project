controlQuestionsCtrl.$inject = [];
export default function controlQuestionsCtrl() {
    this.questionPart = true;
    
    this.splitQuestion = function (question) {
        return question.split('$');
    };
    
    this.endTest = function () {
        this.questionPart = false;  
    };

    this.incorrectAnswer = function (userAnswer, realAnswer) {
        return userAnswer.toLowerCase() !== realAnswer.toLowerCase();
    };
}
