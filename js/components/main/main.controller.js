(function () {
    function MainController() {
        /**
         * Callback that gets called when card form is updated
         * @param {*} cardData 
         */
        this.onFormUpdate = function (cardData) {
            this.cardData = angular.copy(cardData);
        }

        /**
         * Callback that gets called when the theme changes
         * @param {*} chosenTheme 
         */
        this.onThemeUpdate = function (chosenTheme) {
            this.chosenTheme = chosenTheme;
        }

        /**
         * Downloads the business card as an image
         */
        this.downloadCard = function () {
            html2canvas(document.getElementById("card")).then(function (canvas) {
                var img, link;
                img = canvas.toDataURL("image/png");
                link = document.createElement('a');
                link.href = img;
                link.download = 'Download.jpg';
                document.body.appendChild(link);
                link.click();
            });
        }

        /**
         * Prints the business card
         * ToDo : Need to clean this up
         */

        this.printCard = function () {
            var printContents = document.getElementById("card").outerHTML;
            var popupWin = window.open('', '_blank', 'width=900,height=600');
            popupWin.document.open();
            popupWin.document.write(`<html>
                                        <head>
                                            <link rel="stylesheet" href="../../../node_modules/font-awesome/css/font-awesome.min.css">
                                            <link rel="stylesheet" type="text/css" href="../../../css/index.css" />
                                        </head>
                                        <body onload="window.print()">` + printContents + `</body>
                                    </html>`);
            popupWin.document.close();
        }
    }

    angular.module('bCardApp').controller('MainController', MainController);
})();