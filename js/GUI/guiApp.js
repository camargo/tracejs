/**
 * Created by mzimmerman on 2/12/15.
 */

(function(angular) {

    angular.module('guiApp', ['guiControllers', 'guiServices', 'guiDirectives', 'ngRoute'])

        .config(function($locationProvider, $routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/scene.html'
                })
                .when('/scene', {
                    templateUrl: 'views/scene.html'
                })
                .when('/objects', {
                    templateUrl: 'views/objects.html'
                })
                .when('/lights', {
                    templateUrl: 'views/lights.html'
                })
                .otherwise({
                    redirectTo: '#!'
                })
        })

})(angular || (angular = {}));
