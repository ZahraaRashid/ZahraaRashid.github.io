var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
  $("display_results").onclick = displayResults;
  $("display_scores").onclick = displayScores;
  $("add").onclick = addScore;
  
  
};
function addScore()
{
  var name = $("name").value;
  var score = parseInt($("score").value);
  if (name.length > 0 && score >= 0 && score <= 100)
  {
    names.push(name);
    scores.push(score);
    $("name").value = "";
    $("score").value = "";
    $("name").focus();
  }
  else
  {
    alert("You must enter a name and a valid score");
  }
  
}

function displayResults()
{
  var average = 0;
  for(var i=0;i<scores.length;i++)
  {
    average= (average*(i)+scores[i])/(i+1);
  }
  var maxValue = scores[0];
  var maxIndex = 0;
  for(var i=1;i<scores.length;i++)
  {
    if(scores[i]>maxValue)
    {
      maxValue = scores[i];
      maxIndex = i;
    }
  }
  var maxName = names[maxIndex];
  document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score = "+average + "<br \> "
  +"High score = "+maxValue+" with a score of "+maxName;
  $("name").focus();
}
function displayScores() {
  var head = "<tr><th>Name</th><th>Score</th></tr>";
  var html = head;
  for(var i=0;i<scores.length;i++)
  {
    html += "<tr><td>"+names[i]+"</td><td>"+scores[i]+"</td></tr>";
  }
  document.getElementById("scores_table").innerHTML="<h2> Scores </h2><br /> <table>"+html+"</table>";
  $("name").focus();

}
