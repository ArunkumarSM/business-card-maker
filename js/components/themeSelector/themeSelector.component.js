(function () {
    angular.module('bCardApp').component('themeSelector', {
        templateUrl: 'js/components/themeSelector/themeSelector.template.html',
        controller: 'ThemeSelectorController',
        bindings: {
            onThemeUpdate : '&'
        }
    });
})();