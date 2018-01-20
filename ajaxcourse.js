$(document).ready(function(){
	$("body").css("background-color", "blue");

    $("button").click(function(){
$("body").css("background-color", "red");
       $.get("index.html", function(data) {
       alert("Sss");
       $("body").css("background-color", "green");
       });
   });
  
});