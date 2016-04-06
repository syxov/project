popupCtrl.$inject = ['$uibModalInstance'];
export default function popupCtrl(uibModalInstance) {
    this.ok = function () {
        uibModalInstance.close();
    };

    this.cancel = function () {
        uibModalInstance.dismiss();
    };
}
