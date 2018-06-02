(function () {
    angular.module('bCardApp').component('cardPreview', {
        templateUrl: 'js/components/cardPreview/cardPreview.template.html',
        controller: 'CardPreviewController',
        bindings: {
            cardData : '<',
            cardTheme : '<'
        }
    });
})();