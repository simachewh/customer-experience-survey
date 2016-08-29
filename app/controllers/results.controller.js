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

        self.populateData = populateData;

        self.yes = [0, 0, 0, 0, 0, 0];
        self.no = [0, 0, 0, 0, 0, 0];
        self.maybe = [0, 0, 0, 0, 0, 0];
        populateData();
        self.zcOptions = {
            type: 'line',
            plot: {
                aspect: "spline"
            },
            title: {
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
                {text: "Maybe", values: self.maybe},
                {text: "No", values: self.no},
                {text: "Yes", values: self.yes}
            ],
            plot: {},
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

        function populateData() {

            results.forEach(function (e) {
                console.log("e in foreach ", e);
                if (e.q1 === "yes") self.yes[0] += 1
                else if (e.q1 === "maybe") {
                    self.maybe[0] += 1;
                    console.log(e.q1, " ... ", self.maybe[0]);
                }
                else if (e.q1 == "no") self.no[0] += 1

                if (e.q2 == "yes") self.yes[1] += 1
                else if (e.q2 == "maybe") self.maybe[1] += 1
                else if (e.q2 == "no") self.no[1] += 1

                if (e.q3 == "yes") self.yes[2] += 1
                else if (e.q3 == "maybe") self.maybe[2] += 1
                else if (e.q3 == "no") self.no[2] += 1

                if (e.q4 == "yes") self.yes[3] += 1
                else if (e.q4 == "maybe") self.maybe[3] += 1
                else if (e.q4 == "no") self.no[3] += 1

                if (e.q5 == "yes") self.yes[4] += 1
                else if (e.q5 == "maybe") self.maybe[4] += 1
                else if (e.q5 == "no") self.no[4] += 1

                if (e.q6 == "yes") self.yes[5] += 1
                else if (e.q6 == "maybe") self.maybe[5] += 1
                else if (e.q6 == "no") self.no[5] += 1
            });
            console.log("yes: ", self.yes, "no: ", self.no);
        };

    };
}());