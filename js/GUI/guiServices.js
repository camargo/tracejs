/**
 * Created by mzimmerman on 2/12/15.
 */

(function(angular) {

    angular.module('guiServices', [])
        .factory('worldService', function($window) {

            var $Tracejs = {};
            if ($window.Tracejs) {
                $Tracejs = $window.Tracejs
            }
            else {
                console.log("tracejsProvider: Tracejs not yet found on global window object");
                return undefined
            }

            // World Component factory
            var worldComponent = function(identifier, $scope) {
                    this.type = 'base';
                    this.colorHex = '#FFFFFF';
                    this.color = {};
                    if (identifier === 'object') {
                        this.colorHex = '#7D0000';
                        this.color.r = 0.5;
                        this.color.g = this.color.b = 0;
                        this.material = {
                            type : $scope.materialOptions.type[0]
                        }
                    }
                    else if (identifier === 'light') {
                        this.colorHex = '#FFFFFF';
                        this.color.r = this.color.g = this.color.b = 1;
                        this.location = {
                            x : -200,
                            y : 200,
                            z : -200
                        }
                    }
                };

            worldComponent.prototype.create = function(type) {
                this.type = type;
                if (this.type === 'sphere') {
                    this.radius = 100;
                    this.center = {
                        x:0,
                        y:0,
                        z:0
                    }
                }
                else if (this.type === 'triangle') {
                    this.location = {
                        p1: [0,0,0],
                        p2: [100,0,0],
                        p3: [0,100,0]
                    }
                }
                else if (this.type === 'torus') {
                    this.a = 200;
                    this.b = 100
                }
                return this;
            };

            return {
                newWorldComponent : function(identifier, type, $scope) {
                    var comp = new worldComponent(identifier, $scope);
                    return comp.create(type)
                },
                getTracejs : function () {
                    return $Tracejs
                },
                createWorld : function() {
                    return new $Tracejs.World()
                },
                renderScene : function($world, params) {
                    $world.vp(params.vp.hres, params.vp.vres, params.vp.psize);
                    $world.bgColor(params.bgColor.r, params.bgColor.g, params.bgColor.b);
                    $world.object(params.object);
                    $world.sampler(params.sampler.type, params.sampler.num_samples);
                    $world.light(params.light);
                    $world.camera(params.camera);

                    return $world.renderScene();
                }
            }

        })
        .factory('canvasService', function($window) {

            var $canvas = $window.canvas;

            return {
                getCanvas: function () {
                    return $canvas
                },
                setCanvasDimensions : function (canvas, width, height) {
                    canvas.width = width;
                    canvas.height = height;
                    $(canvas).css({
                        width: width.toString(),
                        height: height.toString()
                    })
                },
                renderCanvas: function (canvas, worldData) {
                    var context = canvas.getContext('2d');
                    var canvasData = context.createImageData(canvas.width, canvas.height);
                    for (var y = 0; y < canvasData.height; y++) {
                        for (var x = 0; x < canvasData.width; x++) {

                            var idx = (x + y * canvasData.width) * 4;

                            canvasData.data[idx + 0] = worldData[y][x].r;
                            canvasData.data[idx + 1] = worldData[y][x].g;
                            canvasData.data[idx + 2] = worldData[y][x].b;
                            canvasData.data[idx + 3] = 200; // hard-coded alpha for now

                        }
                    }

                    context.putImageData(canvasData, 0, 0);
                }
            }
        })

})(angular || (angular = {}));