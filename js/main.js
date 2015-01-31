/**
 * This is the "main method", or the program making
 * all the Tracejs API calls
 */

(function(Tracejs) {
    $(document).ready(function () {

        if (typeof Tracejs != 'object') {
            console.log("Include source files before making calls to Tracejs");
            return;
        }

        // instantiate a new world
        world = new Tracejs.World();

        // instantiate new GUI
        GUI = new Tracejs.GUI(world);
        GUI.create();

        // get canvas 2D context
        GUI.canvas = $('canvas')[0];
        GUI.context = canvas.getContext('2d');

        // hook up buttons
        $('#render-scene').on('click', function() {
            // var view_plane_matrix = GUI.renderScene();
            alert(world.renderScene(true));
        });
        $('#gui-form').bind('submit', function () {
            // save all GUI settings to world using Tracejs.World API
        });
        $('#gui-form').bind('reset', function () {
            var canvasWidth = $('#canvas').css('width');
            $('#canvas').css({   // resetting canvas size should reset the pixels
                width: '1px'
            }).css({
                width: canvasWidth
            })
        });

        // attach function to display rendered matrix to canvas
        Tracejs.renderCanvas = function(cxt, data) {

        };

    });
})(Tracejs || null);

