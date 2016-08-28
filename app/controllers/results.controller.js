/**
 * Created by Simachew on 27-Aug-16.
 */

(function () {
    angular
        .module("ces")
        .controller("ResultsController", ["$timeout", ResultsController]);

    function ResultsController($timeout) {
        var self = this;

        self.lables = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"];
        self.series = ["Yes", "Maybe", "No"];
        self.data = data = [
            [65, 59, 80, 81, 56, 55],
            [28, 48, 40, 19, 86, 27],
            [25, 95, 85, 46, 22, 36]
        ];
        self.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        };
        self.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $timeout(function () {
            $scope.data = [
                [28, 48, 40, 19, 86, 27, 90],
                [65, 59, 80, 81, 56, 55, 40]
            ];
        }, 3000);

    };
}());