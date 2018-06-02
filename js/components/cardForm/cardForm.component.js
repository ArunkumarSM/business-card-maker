(function () {
    angular.module('bCardApp').component('cardForm', {
        templateUrl: 'js/components/cardForm/cardForm.template.html',
        controller: 'CardFormController',
        bindings: {
            onFormUpdate : '&'
        }
    });
})();