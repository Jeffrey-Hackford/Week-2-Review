$(document).ready(function() {
  $("form#input").submit(function(event) {
    var triangle = $("input#button1");
    var desert = $("input#button2");
    var northPole = $("input#button3");

    $("#destination1").hide();
    $("#destination2").hide();
    $("#destination3").hide();

    if (triangle.checked){
        $("#output#destination1").show();
    } else if
      (desert.checked){
        $("#output#destination2").show();
    } else
      (northPole.checked)
        $("#output#destination3").show();
console.log();
    });
    event.preventDefault();
  });
