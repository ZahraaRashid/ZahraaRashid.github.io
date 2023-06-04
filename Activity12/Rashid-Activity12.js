

$(document).ready(function() {
    
    // I fetch the data for each speaker from the json file
    //@param file: the name of the json file
    function fetchSpeakerData(file) {
      $.getJSON("json_files/" + file + ".json", function(data) {
        
        //I Remove the previous speaker information
        $("main").empty();
  
        // I create the speaker information as HTML elements
        var title = $("<h1>").text(data.speakers[0].title);
        var image = $("<img>").attr("src", data.speakers[0].image);
        var month = $("<h2>").html(data.speakers[0].month + "<br>" + data.speakers[0].speaker);
        var description = $("<p>").text(data.speakers[0].text);
  
        //I sent the speaker information to the page in main tag
        $("main").append(title, image, month, description);
      });
    }
  
    // When the user clicks on sidebar it fethces the data for the speaker
    $("#nav_list a").click(function(e) {
      e.preventDefault();
  
      var title = $(this).attr("title");
  
      fetchSpeakerData(title);
    });
  });
