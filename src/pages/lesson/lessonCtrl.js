export default function lessonCtrl($scope, $state, lessonsConfig) {
    const {sectionId, lessonId} = $state.params;
    const [parsedSectionId, parsedLessonId] = [+sectionId, +lessonId];

    this.section = _.find(lessonsConfig, ({id}) => id === parsedSectionId);
    this.lesson = _.find(this.section.lessons, ({id}) => id === parsedLessonId);
    this.selectedPart = this.lesson.parts[0];

    let selectedPartIndex = 0;

    this.nextPart = function () {
        if (selectedPartIndex < this.lesson.parts.length - 1) {
            this.selectedPart = this.lesson.parts[++selectedPartIndex];
        } else if (this.lesson !== _.last(this.section.lessons)) {
            $state.go('lesson', {
                sectionId: parsedSectionId,
                lessonId: this.lesson.id + 1
            });
        } else {
            $state.go('lesson', {
                sectionId: parsedSectionId + 1,
                lessonId: 1
            });
        }
    };
    $scope.$on('testStarted', () => this.hideNavButtons = true);
    $scope.$on('testEnded', () => this.hideNavButtons = false);
}
