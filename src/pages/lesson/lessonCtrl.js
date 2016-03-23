export default function lessonCtrl($state, lessonsConfig) {
    const {sectionId, lessonId} = $state.params;
    this.section = _.findWhere(lessonsConfig, {id: +sectionId});
    this.lesson = _.findWhere(this.section.lessons, {id: +lessonId});
    this.selectedPart = this.lesson.parts[0];
    let selectedPartIndex = 0;

    this.nextPart = function () {
        this.selectedPart = this.lesson.parts[++selectedPartIndex];
    };

    this.lastPartSelected = function () {
        return selectedPartIndex === this.lesson.parts.length - 1;
    };
}
