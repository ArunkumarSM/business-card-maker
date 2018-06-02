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
    }

    angular.module('bCardApp').controller('CardPreviewController', CardPreviewController);
})();
