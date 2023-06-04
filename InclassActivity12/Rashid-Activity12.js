$(document).ready(function() {
  function fetchSpeakerData(filename) {
    $.getJSON("json_files/" + filename + ".json", function(data) {
      $("main").empty();
      var image = data.speakers[0].image;
      var title = $("<h1>").text(data.speakers[0].title);
      var description = $("<p>").text(data.speakers[0].text);
      var month = $("<h2>").html(data.speakers[0].month + "<br>" + data.speakers[0].speaker);
      $("main").append(title, image, month, description);
    });
  }
  $("#nav_list a").click(function(event) {
    event.preventDefault();
    var title = $(this).attr("title");
    fetchSpeakerData(title);
  });
  });
