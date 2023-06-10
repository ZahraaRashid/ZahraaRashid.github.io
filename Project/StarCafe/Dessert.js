$(document).ready(function(){ // start of document ready
  // function to slide down the menu
  $(function() {
    // start of slide show function
    $('.gallery-slideshow').slideshow({
      // default: 2000
      interval: 3000,
      // default: 500
      width: 600,
      // default: 350
      height: 400
    }); // end of slide show menu function
  }); // end of function to slide show the menu
}); // end of document ready
