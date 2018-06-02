(function () {
    function CardPreviewController() {
        this.cardData = {
            name: '',
            designation: '',
            company: '',
            email: '',
            website: '',
            address: '',
            telephone: '',
            mobile: '',
            photo: null
        }

        this.$onInit = function () {
        }

        this.$onChanges = function () {
            console.log("CardPreviewController Changes", JSON.stringify(this.cardData), this.cardTheme);
        }
    }

    angular.module('bCardApp').controller('CardPreviewController', CardPreviewController);
})();
