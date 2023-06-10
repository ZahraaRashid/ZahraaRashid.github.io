$(document).ready(function() { // start of document ready

    // start of fetchSpeakerData function
    function fetchSpeakerData(file) { 
      // start of getJSON to retrieve the JSON data from a file
      $.getJSON("json_files/" + file + ".json", function(data) {
  
        // empty() method removes all child nodes and content from the selected elements
        $("main").empty();
  
        // h1, h2, and p elements are created and the text from the JSON file is added to them
        var title = $("<h1>").text(data.speakers[0].title);
        var month = $("<h2>").html(data.speakers[0].month + "<br>" + data.speakers[0].speaker);
        var description = $("<p>").text(data.speakers[0].text);
        
        // append() method inserts specified content at the end of the selected elements
        $("main").append(title, month, description);
      
      }); // end of getJSON to retrieve the JSON data from a file
    } // end of fetchSpeakerData
  
    // click() method attaches an event handler function to an HTML element
    $("#nav_list a").click(function(e) {
    
      // e.preventDefault() method prevents the default action of an element from happening
      e.preventDefault();
    
      // attr() method sets or returns attributes and values of the selected elements
      var title = $(this).attr("title");
  
      // fetchSpeakerData() function is called
      fetchSpeakerData(title);
    });
  }); // end of document ready
  
  