export default function lessonCtrl($state, lessonsConfig) {
    const {sectionId, lessonId} = $state.params;
    this.section = _.find(lessonsConfig, ({id}) => id === +sectionId);
    this.lesson = _.find(this.section.lessons, ({id}) => id === +lessonId);
    this.selectedPart = this.lesson.parts[0];
    let selectedPartIndex = 0;

    this.nextPart = function () {
        this.selectedPart = this.lesson.parts[++selectedPartIndex];
    };

    this.lastPartSelected = function () {
        return selectedPartIndex === this.lesson.parts.length - 1;
    };
}
