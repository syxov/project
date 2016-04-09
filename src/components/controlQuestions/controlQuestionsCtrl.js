export default function controlQuestionsCtrl($scope) {
    this.questionPart = true;
    
    this.splitQuestion = function (question) {
        return question.split('$');
    };
    
    this.endTest = function () {
        this.questionPart = false;
        this.computeUserAnswers();
        $scope.$emit('testEnded');
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
        const lowerCasedUserAnswer = userAnswer.trim().toLowerCase();
        const lowerCasedRealAnswer = realAnswer.trim().toLowerCase();
        return levenshtein(lowerCasedUserAnswer, lowerCasedRealAnswer) <= 2;
    }

    $scope.$emit('testStarted');

    /**
     * @param {string} s1 Исходная строка
     * @param {string} s2 Сравниваемая строка
     * @return {number} Расстояние Левенштейна
     */
    function levenshtein(s1, s2) {
        let i, j, l1, l2, flip, ch, chl, ii, ii2, cost, cutHalf;
        l1 = s1.length;
        l2 = s2.length;

        const cr = 1;
        const cri = 1;
        const ci = 1;
        const cd = 1;

        cutHalf = flip = Math.max(l1, l2);

        const minCost = Math.min(cd, ci, cr);
        const minD = Math.max(minCost, (l1 - l2) * cd);
        const minI = Math.max(minCost, (l2 - l1) * ci);
        const buf = new Array((cutHalf * 2) - 1);

        for (i = 0; i <= l2; ++i) {
            buf[i] = i * minD;
        }

        for (i = 0; i < l1; ++i, flip = cutHalf - flip) {
            ch = s1[i];
            chl = ch.toLowerCase();

            buf[flip] = (i + 1) * minI;

            ii = flip;
            ii2 = cutHalf - flip;

            for (j = 0; j < l2; ++j, ++ii, ++ii2) {
                cost = (ch === s2[j] ? 0 : (chl === s2[j].toLowerCase()) ? cri : cr);
                buf[ii + 1] = Math.min(buf[ii2 + 1] + cd, buf[ii] + ci, buf[ii2] + cost);
            }
        }
        return buf[l2 + cutHalf - flip];
    }
}
