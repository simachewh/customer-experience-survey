/**
 * Created by Simachew on 27-Aug-16.
 */

(function () {
    angular
        .module("ces")
        .config(["$routeProvider", "$locationProvider", appRouteConfig]);

    function appRouteConfig($routeProvider, $locationProvider) {
        $locationProvider.htm5Mde(true);

        $routeProvider
            .when("/", {
                templateUrl: "../views/survey.html",
                controller: "SurveyController",
                conteollerAs: "vm"
            })
            .when("/results", {
                templateUrl: "../views/results.html",
                controller: "ResultsController"
            })
    };
}());