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

        // set canvas to size representing world and get canvas 2D context
        GUI.setCanvasDimensions = function (width, height) {
            var canvasWidth = $('#canvas').css('width');
            $('#canvas').css({
                width: width,
                height: height
            })
        };

        GUI.canvas = $('canvas')[0];
        GUI.context = GUI.canvas.getContext('2d');
        GUI.setCanvasDimensions(world.vp().getHres(), world.vp().getVres());

        // hook up buttons
        $('#render-scene').on('click', function() {
            // var view_plane_matrix = GUI.renderScene();
            var JSONresponse = world.renderScene(true);
            var data = JSON.parse(JSONresponse); // declare as global so can be accessed by renderCanvas
            GUI.renderCanvas(GUI.context, data);
        });

        $('#gui-form').submit(function (event) {
            event.preventDefault();

            // save all GUI settings to world using Tracejs.World API
            var inputs = $('#gui-form :input').serializeArray();
            var hres = inputs[0].value;
            var vres = inputs[1].value;
            var psize = inputs[2].value;
            var bgColorHex = inputs[3].value;
            var bgcolor = GUI.hexToRgb(bgColorHex.slice(-(bgColorHex.length-1)));

            world.vp(hres, vres, psize);
            GUI.setCanvasDimensions(hres, vres);

            world.bgColor(new Tracejs.RGBColor(bgcolor.r,bgcolor.g,bgcolor.b));
        });

        $('#gui-form').bind('reset', function () {
            world.vp(300, 150, 1);
            GUI.setCanvasDimensions('300', '150');
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
                    GUI.canvasData.data[idx + 3] = 200; // hard-coded alpha for now

                }
            }
            cxt.putImageData(GUI.canvasData,0,0);

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

