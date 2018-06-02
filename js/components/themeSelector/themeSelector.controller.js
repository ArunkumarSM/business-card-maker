(function () {
    function ThemeSelectorController() {
        // Themes From : https://color.adobe.com
        this.themes = [
            { displayName: 'Leticia', className: 'leticia' },
            { displayName: 'Triadic', className: 'triadic' },
            { displayName: 'Pastel', className: 'pastel' },
            { displayName: 'Analog', className: 'analog' },
            { displayName: 'Crepusculo', className: 'crepusculo' }
        ];

        this.chosenTheme = 'leticia';


        this.$onInit = function () {
            this.onThemeUpdate({ chosenTheme: 'leticia' });
        }

        this.onThemeChange = function (chosenTheme) {   
            this.chosenTheme = chosenTheme;
            this.onThemeUpdate({ chosenTheme: this.chosenTheme });
        }
    }

    angular.module('bCardApp').controller('ThemeSelectorController', ThemeSelectorController);
})();