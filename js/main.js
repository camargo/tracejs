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

        // set canvas to size representing world
        GUI.canvas = $('canvas')[0];
        GUI.context = GUI.canvas.getContext('2d');

        GUI.setCanvasDimensions(GUI.canvas, world.vp().getHres(), world.vp().getVres());

        // hook up buttons
        $('#render-scene').on('click', function() {
            // var view_plane_matrix = GUI.renderScene();
            var JSONresponse = world.renderScene();
            var data = JSON.parse(JSONresponse); // declare as global so can be accessed by renderCanvas
            GUI.renderCanvas(GUI.context.createImageData(GUI.canvas.width, GUI.canvas.height), data);
        });

        $('#gui-form').submit(function (event) {
            event.preventDefault();

            // save all GUI settings to world using Tracejs.World API
            var inputs = $('#gui-form :input').serializeArray();
            var hres = parseInt(inputs[0].value, 10);
            var vres = parseInt(inputs[1].value, 10);
            var psize = parseInt(inputs[2].value, 10);
            var bgColorHex = inputs[3].value;
            var bgcolor = GUI.hexToRgb(bgColorHex.slice(-(bgColorHex.length-1)));

            world.vp(hres, vres, psize);
            GUI.setCanvasDimensions(GUI.canvas, hres, vres);

            world.bgColor(new Tracejs.RGBColor(bgcolor.r,bgcolor.g,bgcolor.b));
        });

        $('#gui-form').bind('reset', function () {
            world.vp(300, 150, 1);
            GUI.setCanvasDimensions(GUI.canvas, 300, 150);
        });

        // helper functions
        // attach function to display rendered matrix to canvas
        GUI.renderCanvas = function(canvasData, worldData) {

            if (world.vp().getHres() !== canvasData.width || world.vp().getVres() !== canvasData.height) {
                console.log("Warning: canvas dimensions don't match world view plane dimensions");
                return
            }
            for (var y = 0; y < canvasData.height; y++) {
                for (var x = 0; x < canvasData.width; x++) {

                    var idx = (x + y * canvasData.width) * 4;

                    canvasData.data[idx + 0] = worldData[y][x].r;
                    canvasData.data[idx + 1] = worldData[y][x].g;
                    canvasData.data[idx + 2] = worldData[y][x].b;
                    canvasData.data[idx + 3] = 200; // hard-coded alpha for now

                }
            }

            GUI.context.putImageData(canvasData, 0, 0);

        };

        GUI.hexToRgb = function(hex) {
            var bigint = parseInt(hex, 16);

            return {
                r: (bigint >> 16) & 255,
                g: (bigint >> 8) & 255,
                b: bigint & 255
            };
        }
    });
})(Tracejs || null);

