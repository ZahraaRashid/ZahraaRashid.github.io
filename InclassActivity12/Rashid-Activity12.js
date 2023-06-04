$(document).ready(function() {
  function fetchSpeakerData(jsonfile) {
    $.getJSON("json_files/" + jsonfile + ".json", function(data) {
      $("main").empty();
      var title = $("<h1>").text(data.speakers[0].title);
      var image = $("<img>").attr("src", data.speakers[0].image);
      var month = $("<h2>").html(data.speakers[0].month + "<br>" + data.speakers[0].speaker);
      var description = $("<p>").text(data.speakers[0].text);
      $("main").append(title, image, month, description);
    });
  }
  $("#nav_list a").click(function(a) {
    a.preventDefault();

    var title = $(this).attr("title");

    fetchSpeakerData(title);
  });
});

