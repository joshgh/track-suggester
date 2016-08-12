var getAns = function(name){
  var query = "input:radio[name=" + name + "]:checked";
  return $(query).val();
};

var getTrack = function(){
  var facing = getAns("facing");
  var usage = getAns("usage");
  var location = getAns("location");
  var start = getAns("start");
  var design = getAns("design");
  var company = getAns("company");
  if (facing === "front") {
    return "design";
  } else {
    if (location === "seattle") {
      return "csharp";
    } else if (location === "philadelphia") {
      return "php";
    } else {
      if (usage === "enterprise"){
        if (company === "msft"){
          return "csharp";
        } else {
          return "java";
        }
      } else {
        if (start === "oct") {
          return "ruby";
        } else {
          return "php";
        }
      }
    }
  }
};

$(document).ready(function() {
  $("button#reset").click(function(){
    $("#questions").show();
    $(".question").hide();
    $("#question1").show();
    $("#results").hide();
    $(".track").hide();
  });
  $("button#start").click(function(){
    $("button#start").hide();
    $("#questions").show();
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
    $("#question6").show();
  });
  $("#question5 button.showPrev").click(function(){
    $("#question5").hide();
    $("#question4").show();
  });
  $("#question6 button.showPrev").click(function(){
    $("#question6").hide();
    $("#question5").show();
  });
  $("button#finish").click(function(){
    $("#questions").hide();
    console.log(getTrack());
    var trackQuery = "#" + getTrack();
    $("#results").show();
    $(trackQuery).show();
  });
});
