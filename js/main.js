/**
 * This is the "main method", or the program making
 * all the Tracejs API calls
 */

(function(Tracejs, $) {

    $(document).ready(function() {

        // instantiate a new world
        var context = document.getElementById('canvas').getContext('2d');
        Tracejs.world = new Tracejs.World(context);
        Tracejs.gui = Tracejs.world.createGUI();

        // hook up buttons
        $('#render').bind('click', function(world) {
            Tracejs.world.renderScene();
        });
        $('#reset').bind('click', function() {
            var canvasWidth = $('#canvas').css('width');
            $('#canvas').css({   // resetting canvas size should reset the pixels
                width : '1px'
            }).css({
                width : canvasWidth
            })
        })

    })

})(Tracejs || (Tracejs={}), $ || jQuery.noConflict(true));
