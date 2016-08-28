/**
 * Created by Simachew on 27-Aug-16.
 */

(function () {
    angular
        .module("ces")
        .config(["$routeProvider", "$locationProvider", appRouteConfig]);

    /**
     *
     * @param $routeProvider
     * @param $locationProvider
     */
    function appRouteConfig($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "../views/survey.html",
                controller: "SurveyController",
                controllerAs: "vm"
            })
            .when("/surveyResults", {
                templateUrl: "../views/results.html",
                controller: "ResultsController",
                controllerAs: "vm"
            })
            .otherwise({
                redirectTo: "/"
            });
    };
}());