export default function lessonCtrl($state, lessonsConfig) {
    const {sectionId, lessonId} = $state.params;
    this.section = _.findWhere(lessonsConfig, {id: +sectionId});
    this.lesson = _.findWhere(this.section.lessons, {id: +lessonId});
}
