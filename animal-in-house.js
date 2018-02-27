 var roofColor = $("#roofButton").on("click",function(){
 	var colorId=$("#first").val();
	if(colorId == "a"){
		$("#roof").css("color", "grey")
	}else if(colorId == "b"){
		$("#roof").css("color", "green")
	}else if(colorId == "c" ){
		$("#roof").css("color", "orange")
	}else if(colorId == "d"){
		$("#roof").css("color", "yellow")
	}
});
  var buildingColor = $("#buildingButton").on("click",function(){
 	var colorId= $("#second").val();
	if(colorId == "a"){
		$("#building").css("background-color", "grey")
	}else if(colorId == "b"){
		$("#building").css("background-color", "green")
	}else if(colorId == "c" ){
		$("#building").css("background-color", "orange")
	}else if(colorId == "d"){
		$("#building").css("background-color", "yellow")
	}
});

  $("#liveButton").on("click",function(){
 	var colorId= $("#third").val();
	if(colorId == "a"){$("body").css({"background":"url('mountain.jpg')no-repeat center center fixed",  "-webkit-background-size": "cover","-moz-background-size":"cover","-o-background-size": "cover","background-size":"cover","background-size":"100% 100%","height":"100vh"})}
		else if(colorId == "b"){$("body").css({"background":"url('lake.png')no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size":"cover","-o-background-size": "cover","background-size":"cover","background-size":"100% 100%","height":"100vh"})}
        else if(colorId == "c" ){$("body").css({"background":"url('beach.jpeg')no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size":"cover","-o-background-size": "cover","background-size":"cover","background-size":"100% 100%","height":"100vh"})}
        else if(colorId == "d"){$("body").css({"background":"url('island.jpg')no-repeat center center fixed","-webkit-background-size": "cover","-moz-background-size":"cover","-o-background-size": "cover","background-size":"cover","background-size":"100% 100%","height":"100vh"})};
});
 $("#animalButton").on("click",function(){
 	var colorId= $("#fourth").val();
	if(colorId == "a"){$("#animal").empty().append("<img class='secert' src='squrie.gif'></img>")}
		else if(colorId == "b"){$("#animal").empty().append("<img class='secert' src='chin.gif'></img>")}
        else if(colorId == "c"){$("#animal").empty().append("<img class='secert' src='dino.gif'></img>")}
         else if(colorId == "d"){$("#animal").empty().append("<img class='secert' src='dog.gif'></img>")}
});
  $("#roofButton").on("click", function(){
 if($("#first").val() == "a"||"b" || "c"||"d" ){
 	$("#roof").css({"width":"0",
 		"height":"0","border-left":" 250px solid transparent","border-right":" 250px solid transparent",
 		"border-bottom":" 350px solid ","background":"none", roofColor });
 }});
 $("#buildingButton").on("click", function(){ 
 	if($("#second").val() ==  "a"||"b" || "c"||"d" ){
 	$("#building").css({"width":"500px",
 		"height":"300px","color":"none" , buildingColor });
}
});
$(document).ready(function() {
  var test = 0;var test2 =0;var test3 =0;var test4 =0;
  function checkTest() {
    if(test === 1 && test2 == 1 && test3 === 1 && test4 == 1) {
      $("#suprise").css("visibility","visible");}
      }
  $('body').on('click', '#roofButton', function() {
    test = 1;
    checkTest();});
    $('body').on('click', '#buildingButton', function() {
    test2 = 1;
    checkTest();});
    $('body').on('click', '#liveButton', function() {
    test3 = 1;
    checkTest();
});
    $('body').on('click', '#animalButton', function() {
    test4 = 1;
    checkTest();});
});
$("#suprise").click(function(){
	$("#glide").addClass("glide");
	$("p, select,button,h2,h1").remove();
 setTimeout(function(){ $(".secert").css("visibility","visible");
}, 4500);
 setTimeout(function(){
   location.reload();
  }, 8500);
});
