/**
 * Created by Simachew on 27-Aug-16.
 */

(function () {
    angular
        .module("ces", ["ngRoute", "chart.js"])
        .config(['ChartJsProvider', function (ChartJsProvider) {
            // Configure all charts
            ChartJsProvider.setOptions({
                chartColors: ['#FF5252', '#FF8A80'],
                responsive: false
            });
            // Configure all line charts
            ChartJsProvider.setOptions('line', {
                showLines: false
            });
        }]);
}());