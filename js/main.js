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
        GUI.context = GUI.canvas.getContext('2d');

        // hook up buttons
        $('#render-scene').on('click', function() {
            // var view_plane_matrix = GUI.renderScene();
            var JSONresponse = world.renderScene(true);
            alert(JSONresponse);
            var data = JSON.parse(JSONresponse);
            GUI.canvasData = GUI.context.createImageData(GUI.canvas.width, GUI.canvas.height);
            for (var y = 0; y < GUI.canvasData.height; y++) {
                for (var x = 0; x < GUI.canvasData.width; x++) {

                    var idx = (x + y * GUI.canvas.width) * 4;

                    GUI.canvasData.data[idx + 0] = data[y][x].r;
                    GUI.canvasData.data[idx + 1] = data[y][x].g;
                    GUI.canvasData.data[idx + 2] = data[y][x].b;
                    GUI.canvasData.data[idx + 3] = 200; // hard-coded alpha

                }
            }
            debugger;
            GUI.context.putImageData(GUI.canvasData,0,0);
        });
        $('#gui-form').bind('submit', function () {
            // save all GUI settings to world using Tracejs.World API

        });
        $('#gui-form').bind('reset', function () {
            GUI.setCanvasDimensions('300', '150')
        });

        // helper functions
        // attach function to display rendered matrix to canvas
        GUI.renderCanvas = function(cxt, data) {
            GUI.canvasData = cxt.createImageData(GUI.canvas.width, GUI.canvas.height);
            for (var y = 0; y < GUI.canvasData.height; y++) {
                for (var x = 0; x < GUI.canvasData.width; x++) {

                    var idx = (x + y * GUI.canvas.width) * 4;

                    GUI.canvasData.data[idx + 0] = data[y][x].r;
                    GUI.canvasData.data[idx + 1] = data[y][x].g;
                    GUI.canvasData.data[idx + 2] = data[y][x].b;
                    // GUI.canvasData.data[idx + 3] = data[y][x].a;

                }
            }
            debugger;
            cxt.putImageData(GUI.canvasData,0,0);
        };
        GUI.setCanvasDimensions = function (width, height) {
            var canvasWidth = $('#canvas').css('width');
            $('#canvas').css({
                width: width,
                height: height
            })
        }

    });
})(Tracejs || null);

