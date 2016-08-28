/**
 * Created by Simachew on 28-Aug-16.
 */

(function () {
    angular
        .module("ces")
        .factory("surveyStorage", ["$window", surveyStorage]);

    function surveyStorage($window) {
        var STORAGE_ID = "survey-answers";

        var answerStore = {};
        answerStore.allAnswers = getAll() || [];
        console.log("But all answers are ", Array.isArray(answerStore.allAnswers));
        answerStore.insert = insert;
        answerStore.remove = remove;
        answerStore.update = update;
        answerStore.getAll = getAll;
        answerStore.clearAll = clearAll;

        return answerStore;
        /**
         * Inserts the given answer in to the storage.
         * @param answer
         */
        function insert(answer) {
            if (!answer) {
                return;
            }
            answerStore.allAnswers.push(answer);
            console.log("answers length ", answerStore.allAnswers.length);
            $window.localStorage.setItem(STORAGE_ID, JSON.stringify(answerStore.allAnswers));
        };

        /**
         * Removes the given answer from the storage
         * @param answer
         */
        function remove(answer) {

        };

        /**
         * Updates the given answer in the answers storage with the given new values.
         * @param answer the answer to update.
         * @param newValues the new values to set on the answer.
         */
        function update(answer, newValues) {

        };

        function getAll() {
            var stored = JSON.parse($window.localStorage.getItem(STORAGE_ID));
            console.log("Stored answers ", stored, "is array", Array.isArray(stored));
            console.log("Q1 value ", stored);
            if(stored === null){
                return [];
            }
            return stored;
        };

        function clearAll() {
            answerStore.allAnswers = [];
          $window.localStorage.removeItem(STORAGE_ID);
            console.log("Records cleared");
        };

    };
}());