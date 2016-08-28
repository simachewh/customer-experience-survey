/**
 * Created by Simachew on 27-Aug-16.
 */

(function () {
    angular
        .module("ces")
        .controller("SurveyController", ["$scope", "$location", "surveyStorage", SurveyController]);

    /**
     *
     * @constructor
     */
    function SurveyController($scope, $location, surveyStorage) {
        var self = this;
        var MIN_RES = 4;

        self.addAnswer = addAnswer;
        self.clearRecord = clearRecord;
        self.getAll = getAll;
        self.resetForm = resetForm;
        self.resultsReady = resultsReady;
        self.currentPath = $location.path();

        self.answer = {};
        self.choices = ["yes", "maybe", "no"];
        self.questions = [
            {
                id: "one",
                text: "Question One",
                selectedAns: null
            },
            {
                id: "two",
                text: "Question Two",
                selectedAns: null
            },
            {
                id: "three",
                text: "Question Three",
                selectedAns: null
            },
            {
                id: "four",
                text: "Question Four",
                selectedAns: null
            },
            {
                id: "five",
                text: "Question Five",
                selectedAns: null
            },
            {
                id: "six",
                text: "Question Six",
                selectedAns: null
            }
        ];

        function resetForm() {
            var form = document.getElementById("questionForm");
            form.reset();
        }

        /**
         * Returns true if the minimum required answers for analysis
         * have been collected.
         */
        function resultsReady() {
            /*console.log("resultsReady ", surveyStorage.allAnswers.length, (
                surveyStorage.allAnswers.length >= MIN_RES));*/
            return (surveyStorage.allAnswers.length < MIN_RES);
        }

        function collectAnswer() {
            self.answer.q1 = self.questions[0].selectedAns;
            self.answer.q2 = self.questions[1].selectedAns;
            self.answer.q3 = self.questions[2].selectedAns;
            self.answer.q4 = self.questions[3].selectedAns;
            self.answer.q5 = self.questions[4].selectedAns;
            self.answer.q6 = self.questions[5].selectedAns;
        };

        function clearAnswerModel() {
            self.answer.q1 = null;
            self.answer.q2 = null;
            self.answer.q3 = null;
            self.answer.q4 = null;
            self.answer.q5 = null;
            self.answer.q6 = null;
        };

        /**
         * Adds a new record to the storage.
         * Is called on form submit.
         */
        function addAnswer() {
            collectAnswer();
            surveyStorage.insert(self.answer);
            resetForm();
        };

        /**
         * Clears all stored records.
         */
        function clearRecord() {
            surveyStorage.clearAll();
        };

        /**
         * Gets all the answers in storage.
         */
        function getAll() {
            surveyStorage.getAll();
        };
    };

}());