//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user ineraction
//1, Hide spoiler
$(".spoiler span").hide();
//2, Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button");
//3, when button is pressed
$("button").click(function(){
//3.1, show the spoiler
  $(".spoiler span").show();
  //3.2, get rid of the button
  $("button").remove();
});
