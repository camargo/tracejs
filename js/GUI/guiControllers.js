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
                $scope.$world = worldService.createWorld();
                $scope.$canvas = canvasService.getCanvas();

                /**
                 * scope objects
                 */
                $scope.rendering = false;

                $scope.samplerOptions = {
                    type : [
                        'regular',
                        'multijittered'
                    ],
                    num_samples : [
                        1,
                        4,
                        9,
                        16
                    ]
                };

                /**
                 * world data model
                 */
                $scope.world = {
                    vp: {
                        hres: 512,
                        vres: 512,
                        psize: 1
                    },
                    bgColorHex: "#000000",
                    bgColor: {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                    sampler : {
                        type : $scope.samplerOptions.type[1],
                        num_samples : $scope.samplerOptions.num_samples[2]
                    },
                    object : [
                        {
                            type : 'sphere',
                            center: {
                                x: -100,
                                y: -100,
                                z: 150
                            },
                            radius: 100,
                            colorHex : "#48F342",
                            color : {
                                r : 72,
                                g : 243,
                                b : 66
                            }
                        },
                        {
                            type : 'sphere',
                            center : {
                                x : 50,
                                y : 50,
                                z : 0
                            },
                            radius : 100,
                            colorHex : "#D52828",
                            color : {
                                r : 213,
                                g : 40,
                                b : 40
                            }
                        }
                    ]
                };

                $scope.renderScene = function () {
                    var self = this;

                    // save values using Tracejs World API
                    // $scope.rendering = true;
                    var JSONdata = worldService.renderScene(self.$world, self.world);

                    var data;
                    if (JSONdata) {
                        data = JSON.parse(JSONdata);
                    }
                    else {
                        console.log("MainController renderScene: couldn't get JSON data from world.renderScene")
                    }

                    // push to canvas
                    canvasService.setCanvasDimensions(self.$canvas, self.world.vp.hres, self.world.vp.vres);
                    canvasService.renderCanvas(self.$canvas, data)
                };

                $scope.resetScene = function() {
                    var self = this;

                    canvasService.setCanvasDimensions(self.$canvas, '512', '512');
                    self.world.vp.hres = self.world.vp.vres = 512;
                    self.world.vp.psize = 1
                };

                $scope.postColor = function(hex, colorObj) {
                    var self = this;
                    debugger;

                    //self.world.bgColor = self.hexToRgb(self.world.bgColorHex)
                    _.map(self.hexToRgb(hex), function(value, key) {
                        colorObj[key] = value
                    })
                };


                /**
                 * helper functions
                  */
                // see http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
                $scope.hexToRgb = function(hex) {
                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : null;
                }

                $scope.capitalize = function(word) {
                    return word.charAt(0).toUpperCase() + word.slice(1)
                }

            }])

})(angular || (angular = {}));
