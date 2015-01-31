/**
 * Created by mzimmerman on 1/24/15.
 */

(function (Tracejs) {
    var GUI = (function () {

        // TODO: spheres : Sphere[];
        // TODO: sphere_tracers : SingleSphere[]

        // GUI Constructor
        function GUI(world) {
            if (!world) {
                console.log("GUI must take a World as an argument");
                return undefined;
            }
            this.world = world;
        }

        // class methods
        // called from main->GUI to make and bind html elements
        GUI.prototype.create = function () {
            // create basic GUI bar
            var GUIContainer = $('#GUI');
            if (!GUIContainer) {
                console.log("No #GUI HTML element found for GUI");
                return this;
            }
            GUIContainer.append('<div id="addelements" class="btn-group"></div>');
            // this.addSphereButton();

            // create initial ViewPlane controller
            this.addVpController();

            // create initial bgColor controller
            this.addBgColorController();

            return this;
        };
        GUI.prototype.renderScene = function() {
            // save all data
            return world.renderScene();
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
            $('#vp-controller').append('<p>View Plane Settings</p>')
                .append('<input type="number" placeholder="horizontal resolution" name="vpHres"]><br>')
                .append('<input type="text" placeholder="vertical resolution" name="vpVres"/><br>')
                .append('<input type="text" placeholder="pixel size" name="vpPsize"/><br>');
            return this;
        };
        GUI.prototype.addBgColorController = function() {
            $('#GUI').append('<div id="bgcolor-controller" class="gui-controller"></div>');
            $('#bgcolor-controller').append('<p>Background Color</p>')
                .append('<input type="color" name="bgColor"> ')

        };

        return GUI;
    })();
    Tracejs.GUI = GUI;
})(Tracejs || (Tracejs = {}));
