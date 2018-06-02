(function () {
    function ThemeSelectorController() {
        this.themes = [
            { displayName: 'Leticia', className: 'leticia' },
            { displayName: 'Triadic', className: 'triadic' },
            { displayName: 'Pastel', className: 'pastel' },
            { displayName: 'Analog', className: 'analog' },
            { displayName: 'Crepusculo', className: 'crepusculo' }
        ];

        this.chosenTheme = 'leticia';

        /**
         * Sets a default theme
         */
        this.$onInit = function () {
            this.onThemeUpdate({ chosenTheme: 'leticia' });
        }

        /**
         * Change function that gets invoked every time the theme changes.
         * @param {*} chosenTheme 
         */
        this.onThemeChange = function (chosenTheme) {
            this.chosenTheme = chosenTheme;
            this.onThemeUpdate({ chosenTheme: this.chosenTheme });
        }
    }

    angular.module('bCardApp').controller('ThemeSelectorController', ThemeSelectorController);
})();