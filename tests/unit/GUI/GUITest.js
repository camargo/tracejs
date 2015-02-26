describe("GUITest", function() {

    // inject app module
    beforeEach(module('guiApp'));

    describe("GUI MainController", function () {

        // inject controller module with mocked canvas and world services
        beforeEach(module('guiControllers', function($provide) {
            var canvasService = {
                getCanvas: function () {
                    return {
                        height: 150,
                        width: 300
                    }
                }
            };

            var worldService = {
                createWorld : function() {
                    return {
                        key : 'value'
                    }
                },
                renderScene : function() {
                    return
                }
            };

            var $timeout = function(callback, timeout) {
                while (timeout) {
                    timeout--
                }
                callback()
            };

            $provide.value('worldService', worldService);
            $provide.value('canvasService', canvasService);
            $provide.value('$timeout', $timeout)
        }));

        var scope,
            ctrl;

        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('MainController', {
                $scope: scope
            })
        }));

        it("default world", function () {
            expect(scope.world).toBeDefined();
            _.each(scope.world, function (value, key, worldObj) {
                expect(value).toBeDefined();
            })
        });

        it("evalBgColor()", function () {
            scope.world.bgColorHex = "#646E78";
            scope.postColor(scope.world.bgColorHex, scope.world.bgColor);
            expect(scope.world.bgColor.r).toEqual(100/255);
            expect(scope.world.bgColor.g).toEqual(110/255);
            expect(scope.world.bgColor.b).toEqual(120/255)
        });

        it("hexToRgb()", function() {
            var colorObj = scope.hexToRgb("#646E78");
            expect(colorObj.r).toEqual(100/255);
            expect(colorObj.g).toEqual(110/255);
            expect(colorObj.b).toEqual(120/255);
        })
    });

    describe("GUI Services", function () {

        beforeEach(module('guiServices', function ($provide) {
            // create a stubbed $window with canvas and required functions/properties
            var $window = {
                canvas: {
                    width: 100,
                    height: 50,
                    getContext: function () {
                    }
                },
                Tracejs: {
                    World : function() {
                        return {
                            key : 'value'
                        }
                    }
                }
            };
            $provide.value('$window', $window)
        }));

        it("canvasService", inject(function(canvasService) {
            expect(canvasService.getCanvas).toBeDefined();

            var $canvas = canvasService.getCanvas();
            expect($canvas).toBeDefined();
        }));

        it("worldService", inject(function(worldService) {

        }))

    })
});