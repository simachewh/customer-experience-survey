/**
 * Created by Simachew on 27-Aug-16.
 */

(function () {
    angular
        .module("ces")
        .controller("ResultsController", ["surveyStorage", ResultsController]);

    function ResultsController(surveyStorage) {
        var self = this;
        var results = surveyStorage.allAnswers;
        self.zcOptions = {
            type : 'line',
            plot: {
              aspect: "spline"
            },
            title:{
              text: "Customer survey result"
            },
            legend: {
                header: {
                    text: "Chart Legend"
                },
                draggable: true,
                "drag-handler": "icon"
            },
            series: [
                {text: "Maybe", values: [65, 59, 80, 81, 56, 55]},
                {text: "No", values: [28, 48, 40, 19, 86, 27]},
                {text: "Yes", values: [25, 95, 85, 46, 22, 36]}
            ],
            plot:{

            },
            "scale-x": {
            labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"]
        }


        };
        self.lables = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"];
        self.series = ["Yes", "Maybe", "No"];
        self.data = [
            [65, 59, 80, 81, 56, 55],
            [28, 48, 40, 19, 86, 27],
            [25, 95, 85, 46, 22, 36]
        ];



    };
}());