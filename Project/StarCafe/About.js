$(document).ready(function(){
    $(function(){
      $('.example').expandable();
    });
    $('.example').expandable({
      'height': 250
    });
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
  });
  