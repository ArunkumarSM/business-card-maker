(function () {
    function CardFormController() {
        this.cardData = {
            name: '',
            designation: '',
            company: '',
            email: '',
            website: '',
            address: '',
            telephone: '',
            mobile: '',
            photo: ''
        }

        this.phonePattern = /^\d{5}[- ]?\d{6}$/;
        this.mobilePattern = /^\+?\d{2}[- ]?\d{5}[- ]?\d{5}$/;
        this.imgBase64 = {};

        /**
         * Change function that gets invoked every time the form updates.
         */
        this.onFieldChanges = function () {
            var fileType = this.imgBase64.filetype;
            var base64 = this.imgBase64.base64;

            if (fileType && base64) {
                this.cardData.photo = "data:" + fileType + ";base64," + base64;
            }

            this.onFormUpdate({ cardData: this.cardData });
        }
    }

    angular.module('bCardApp').controller('CardFormController', CardFormController);
})();