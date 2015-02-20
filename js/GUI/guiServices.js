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

            return {
                getTracejs : function () {
                    return $Tracejs
                },
                createWorld : function() {
                    return new $Tracejs.World()
                },
                renderScene : function($world, params) {
                    $world.vp(params.vp.hres, params.vp.vres, params.vp.psize);
                    $world.bgColor(params.bgColor.r, params.bgColor.g, params.bgColor.b);
                    //$world.sphere(params.sphere.center, params.sphere.radius);
                    $world.sampler(params.sampler.type, params.sampler.num_samples);

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