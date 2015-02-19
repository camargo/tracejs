/**
 * Created by mzimmerman on 2/12/15.
 */

(function(angular) {

    angular.module('guiControllers', [])
        .controller('MainController', [
            '$scope',
            'worldService',
            'canvasService',
            function($scope, worldService, canvasService) {

                /**
                 * private variables
                 */
                var $world = worldService.createWorld();
                var $canvas = canvasService.getCanvas();

                /**
                 * scope objects
                 */
                $scope.rendering = false;

                $scope.world = {
                    vp: {
                        hres: 512,
                        vres: 512,
                        psize: 1
                    },
                    bgColorHex: "",
                    bgColor: {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                    sphere : {
                        center: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        radius: 200
                    }
                };

                $scope.renderScene = function () {
                    // save values using Tracejs World API
                    // $scope.rendering = true;
                    var JSONdata = worldService.renderScene($world, this.world);

                    var data;
                    if (JSONdata) {
                        data = JSON.parse(JSONdata);
                    }
                    else {
                        console.log("MainController renderScene: couldn't get JSON data from world.renderScene")
                    }

                    // push to canvas
                    canvasService.setCanvasDimensions($canvas, this.world.vp.hres, this.world.vp.vres);
                    canvasService.renderCanvas($canvas, data)
                };

                $scope.resetScene = function() {
                    canvasService.setCanvasDimensions($canvas, '512', '512');
                    this.world.vp.hres = this.world.vp.vres = 512;
                    this.world.vp.psize = 1
                };

                $scope.evalBgColor = function() {
                    debugger;
                    _.map(hexToRgb(this.world.bgColorHex), function(value, key) {
                        this.world.bgColor[key] = value
                    })
                };

                /**
                 * helper functions
                  */
                // see http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
                function hexToRgb(hex) {
                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : null;
                }

            }])

})(angular || (angular = {}));
