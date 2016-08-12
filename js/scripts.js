$(document).ready(function() {
  $("button#start").click(function(){
    $("button#start").hide();
    $("#question1").show();
  });
  $("#question1 button.showNext").click(function(){
    $("#question1").hide();
    $("#question2").show();
  });
  $("#question2 button.showNext").click(function(){
    $("#question2").hide();
    $("#question3").show();
  });
  $("#question2 button.showPrev").click(function(){
    $("#question2").hide();
    $("#question1").show();
  });
  $("#question3 button.showNext").click(function(){
    $("#question3").hide();
    $("#question4").show();
  });
  $("#question3 button.showPrev").click(function(){
    $("#question3").hide();
    $("#question2").show();
  });
  $("#question4 button.showNext").click(function(){
    $("#question4").hide();
    $("#question5").show();
  });
  $("#question4 button.showPrev").click(function(){
    $("#question4").hide();
    $("#question3").show();
  });
  $("#question5 button.showNext").click(function(){
    $("#question5").hide();
  });
  $("#question5 button.showPrev").click(function(){
    $("#question5").hide();
    $("#question4").show();
  });
});
