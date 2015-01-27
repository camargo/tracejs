/**
 * Created by mzimmerman on 1/24/15.
 */
/// <reference path="../World/ViewPlane.ts" />
/// <reference path="../Utilities/RGBColor.ts" />
var Tracejs;
(function (Tracejs) {
    var GUI = (function () {
        // TODO: spheres : Sphere[];
        // TODO: sphere_tracers : SingleSphere[]
        function GUI(vp, background_color) {
            this.vp = vp; // require a ViewPlane from World
            if (background_color) {
                this.background_color = background_color;
            }
            else {
                this.background_color = new Tracejs.RGBColor(0, 0, 0);
            }
        }
        // class methods
        // called from main->world->GUI to make and bind html elements
        GUI.prototype.create = function () {
            // create basic GUI bar
            var GUIContainer = $('#GUI');
            if (!GUIContainer) {
                console.log("No #GUI HTML element found for GUI");
                return this;
            }
            GUIContainer.append('<div id="addelements" class="btn-group"></div>');
            // this.addSphereButton();
            // create initial, ViewPlane, controller
            this.addVpController();
            return this;
        };
        // TODO: Needs more work
        GUI.prototype.addSphereButton = function () {
            var addElementsContainer = $('#addelements').append(function () {
                return '<button id="addsphere" class="btn btn-primary">' + 'Sphere' + ' <i class="fa fa-plus"></i></button>';
            });
            $('#addsphere').bind('click', function () {
                addElementsContainer.append(function () {
                });
            });
            return this;
        };
        GUI.prototype.addVpController = function () {
            $('#GUI').append('<div id="vp-controller" class="gui-controller"></div>');
            $('#vp-controller').append('<p>View Plane Settings</p>').append('<input type="text" placeholder="hres" /><br>').append('<input type="text" placeholder="vres" /><br>').append('<input type="text" placeholder="psize" /><br>');
            return this;
        };
        GUI.prototype.getBgColor = function () {
            return this.background_color;
        };
        GUI.prototype.getVpHres = function () {
            return this.vp.getHres();
        };
        GUI.prototype.getVpVres = function () {
            return this.vp.getVres();
        };
        GUI.prototype.getVpPsize = function () {
            return this.vp.getPsize();
        };
        return GUI;
    })();
    Tracejs.GUI = GUI;
})(Tracejs || (Tracejs = {}));
