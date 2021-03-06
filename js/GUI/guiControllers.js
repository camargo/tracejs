/**
 * Created by mzimmerman on 2/12/15.
 */

(function(angular) {

    angular.module('guiControllers', [])
        .controller('MainController', [
            '$scope',
            '$timeout',
            'worldService',
            'canvasService',
            function($scope, $timeout, worldService, canvasService) {

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
                $scope.materialOptions = {
                    type : [
                        'phong',
                        'matte',
                        'reflective'
                    ]
                };
                $scope.lightOptions = {
                    type : [
                        'directional',
                        'point'
                    ]
                };
                $scope.cameraOptions = {
                    type : [
                        'pinhole',
                        'orthographic'
                    ]
                };
                $scope.objectTypes = {
                    type : [
                        'sphere',
                        'triangle',
                        'plane'/*,
                        'torus'*/
                    ]
                };
                $scope.lightTypes = {
                    type : [
                        'directional',
                        'point'
                    ]
                };

                /**
                 * world data model
                 */
                $scope.world = {
                    vp: {
                        hres: 800,
                        vres: 512,
                        psize: 1
                    },
                    bgColorHex: "#7D7D7D",
                    bgColor: {
                        r: 0.5,
                        g: 0.5,
                        b: 0.5
                    },
                    sampler : {
                        type : $scope.samplerOptions.type[1],
                        num_samples : $scope.samplerOptions.num_samples[2]
                    },
                    camera : {
                        type : $scope.cameraOptions.type[0]
                    },
                    addLight : $scope.lightTypes.type[0],
                    light : [
                        {
                            type : $scope.lightOptions.type[1],
                            location : {
                                x : 0,
                                y : 500,
                                z : 0
                            },
                            colorHex : "#FFFFFF",
                            color : {
                                r: 1,
                                g: 1,
                                b: 1
                            },
                            shadows: true
                        }
                    ],
                    addObject : $scope.objectTypes.type[0],
                    object : [
                        {
                            type: 'sphere',
                            center: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            radius: 250,
                            colorHex: "#FF0000",
                            color: {
                                r: 1,
                                g: 0,
                                b: 0
                            },
                            material: {
                                type: $scope.materialOptions.type[2]
                            }
                        }/*,
                        {
                            type : 'triangle',
                            location : {
                                p1 : [0, 0, 0],
                                p2 : [300, 0, 0],
                                p3 : [0, 300, 0]
                            },
                            colorHex : "#FF0000",
                            color : {
                                r : 1,
                                g : 0,
                                b : 0
                            },
                            material : {
                                type : $scope.materialOptions.type[2]
                            }
                        }*/
                        /*,
                         {
                            type : 'torus',
                            a : 100,
                            b : 20,
                            colorHex : "#D52828",
                            color : {
                                r : 213/255,
                                g : 40/255,
                                b : 40/255
                            },
                            material : {
                                type : $scope.materialOptions.type[2]
                            }
                         },*/
                         /*
                         {
                            type : 'plane',
                            point: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            colorHex : "#FF0000",
                            color : {
                                r : 1,
                                g : 0,
                                b : 0
                            },
                            material : {
                                type : $scope.materialOptions.type[2]
                            }
                         }
                         */
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

                    canvasService.setCanvasDimensions(self.$canvas, '800', '512');
                    self.world.vp.hres = 800;
                    self.world.vp.vres = 512;
                    self.world.vp.psize = 1
                };

                $scope.postColor = function(hex, colorObj) {
                    var self = this;
                    //debugger;

                    //self.world.bgColor = self.hexToRgb(self.world.bgColorHex)
                    _.map(self.hexToRgb(hex), function(value, key) {
                        colorObj[key] = value
                    })
                };

                $scope.addToWorld = function(identifier, type) {
                    this.world[identifier].push(worldService.newWorldComponent(identifier, type, this));
                    this.bootstrapSelect();
                };

                $scope.deleteFromWorld = function(identifier, arraymember) {
                    this.world[identifier].splice(this.world[identifier].indexOf(arraymember), 1)
                };

                $scope.isSphere = function(obj) {
                    return obj.type === 'sphere'
                };

                $scope.isTriangle = function(obj) {
                    return obj.type === 'triangle'
                };

                $scope.isTorus = function(obj) {
                    return obj.type === 'torus'
                };

                $scope.isPlane = function(obj) {
                    return obj.type === 'plane'
                };

                /**
                 * helper functions
                  */
                // see http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
                $scope.hexToRgb = function(hex) {
                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16)/255,
                        g: parseInt(result[2], 16)/255,
                        b: parseInt(result[3], 16)/255
                    } : null;
                };

                $scope.capitalize = function(word) {
                    return word.charAt(0).toUpperCase() + word.slice(1)
                };

                $scope.bootstrapSelect = function() {
                    // "dumb" jquery bootstrap
                    $timeout(function() {
                        // bootstrap-select
                        $('.selectpicker').selectpicker({
                            style: 'btn-primary',
                            width: '150px'
                        });
                    }, 100)
                }

            }])

})(angular || (angular = {}));
