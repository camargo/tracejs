/**
 * Created by mzimmerman on 2/12/15.
 */

(function(angular) {

    angular.module('guiControllers', [])
        .controller('MainController', ['$scope', function($scope) {

            $scope.test = "Hello GUI!";

        }])

})(angular || (angular = {}));
