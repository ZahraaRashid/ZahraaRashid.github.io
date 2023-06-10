$(document).ready(function(){ // start of document ready
  // function to show-hide-content-expandable the content
  $(function(){
    //selects all elements with the class "example" and applies the "expandable" function to them
    $('.example').expandable();
  }); 
  $('.example').expandable({
    'height': 250
  });
  // all classes with the name "example" will be affected by the expandable function 
  //and the "more" and "less" text will be changed
  
  $('.example').expandable({
    'more': 'Show more',
    'less': 'Show less',
    'no_less': false
  });
  $('.example').expandable({
    'animation_duration': 500
  });
  $('.example').expandable({
    expand_responsive : 768
  });
}); // end of document ready
