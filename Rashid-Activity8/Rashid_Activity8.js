$(document).ready(function(){
  $("#language").autocomplete({
    source: ["ActionScript", "AppleScript", "Asp", "JavaScript", "Lisp", "Perl", "PHP", "Python"]
  });
  $("#birthday").datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "1900:2023",
    dateFormat: "yy-mm-dd"
});
  });
