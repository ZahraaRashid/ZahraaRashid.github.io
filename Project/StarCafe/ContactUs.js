// checks if there is at least one element with the class "floating-labels" on the page. 
//If such an element exists, it calls the floatLabels() function.
if( $('.floating-labels').length > 0 ) floatLabels();
// start of floatLabels function
function floatLabels() {
   //This line selects the immediate siblings of elements with the class "cd-label" 
   //that are descendants of elements with the class "floating-labels".
   //It stores the selected elements in the inputFields variable.
   var inputFields = $('.floating-labels .cd-label').next(); 

   //This line iterates over each element in inputFields using the .each() method.
   inputFields.each(function(){

      //This line creates a jQuery object singleInput from the current element being iterated.
      //The $(this) refers to the current element in the iteration.
      var singleInput = $(this); 
      // check if user is filling one of the form fields
      singleInput.keyup(function(){
         //This line calls the checkVal() function and passes the singleInput variable as an argument.
         checkVal(singleInput);  
      });
   }); // end of inputFields.each(function()
} // end of floatLabels function

$(document).ready(function() { // start of document ready

   // calling fetchSpeakerData function
   FreelancersWithAjax();
 });

 // start of fetchSpeakerData function
 function FreelancersWithAjax() {
   // url parameter
   var url = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorp";
   // getJSON method
   $.getJSON(url, function(data) {
      var html = "";

      // each method
      $.each(data.items, function(i, item){
         // html variables
         html += "<h3>" + item.title + "</h3>";
         html += item.description;
         html = html.replace(
            "<p><a href=\"https://www.flickr.com/people/" +
            "82407828@N07/\">zakruvalcaba</a>" +
            " posted a photo:<\/p>", "");
   }); // end of each method

   // generated HTML is inserted into an element with the ID "freelancers" using the .html() method.
   $("#freelancers").html(html);
   }); // end of getJSON method
 } // end of FreelancersWithAjax function
