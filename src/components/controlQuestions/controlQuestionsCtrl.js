controlQuestionsCtrl.$inject = [];
export default function controlQuestionsCtrl() {
    this.questionPart = true;
    
    this.splitQuestion = function (question) {
        return question.split('$');
    };
    
    this.endTest = function () {
        this.questionPart = false;
        this.computeUserAnswers();
    };

    this.computeUserAnswers = function () {
        this.results = this.questions.map(function (question, questionIndex) {
            if (!_.get(question, 'options.orChoice')) {
                return this.computeUserAnswersForQuestionWithoutOrChoice(question, questionIndex);
            } else {
                return this.computeUserAnswersForQuestionWithOrChoice(question, questionIndex);
            }
        }, this);
    };

    this.computeUserAnswersForQuestionWithoutOrChoice = function (question, questionIndex) {
        const splittedQuestion = this.splitQuestion(question.question);
        const result = [];
        splittedQuestion.forEach(function (split, index) {
            result.push(split);
            if (index !== splittedQuestion.length - 1) {
                const correctAnswer = question.answers[index];
                const userAnswer = _.get(this.answers, `${questionIndex}.${index}`);
                result.push({
                    correctAnswer,
                    userAnswer,
                    isCorrectAnswer: isCorrectAnswer(userAnswer, correctAnswer)
                });
            }
        }, this);
        return result;
    };

    this.computeUserAnswersForQuestionWithOrChoice = function (question, questionIndex) {
        const splittedQuestion = this.splitQuestion(question.question);
        const result = [];
        const correctAnswersCopy = angular.copy(question.answers);
        splittedQuestion.forEach(function (split, index) {
            result.push(split);
            if (index !== splittedQuestion.length - 1) {
                const userAnswer = _.get(this.answers, `${questionIndex}.${index}`);
                const correctAnswerIndex = _.findIndex(correctAnswersCopy, correctAnswer => isCorrectAnswer(userAnswer, correctAnswer));
                if (correctAnswerIndex >= 0) {
                    result.push({
                        userAnswer,
                        correctAnswer: correctAnswersCopy[correctAnswerIndex],
                        isCorrectAnswer: true
                    });
                    correctAnswersCopy.splice(correctAnswerIndex, 1);
                } else {
                    result.push({
                        userAnswer,
                        isCorrectAnswer: false
                    });
                }
            }
        }, this);
        correctAnswersCopy.forEach(function (missedCorrectAnswer) {
            _.find(result, function (obj) {
                if (!_.isString(obj) && !obj.isCorrectAnswer && !obj.correctAnswer) {
                    return true;
                }
            }).correctAnswer = missedCorrectAnswer;
        });
        return result;
    };

    function isCorrectAnswer(userAnswer = '', realAnswer) {
        return userAnswer.trim().toLowerCase() === realAnswer.trim().toLowerCase();
    }
}
