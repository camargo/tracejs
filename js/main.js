/**
 * This is the "main method", or the program making
 * all the Tracejs API calls
 */

$(document).ready(function() {

   // instantiate a new world
   world = new Tracejs.World(context);

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

});

