$(function() {
  $("#submit").click(function(event) {

    var operator = $("input:radio[name=operator]:checked").val();
    var breakfast = $("input:radio[name=breakfast]:checked").val();
    var destination = $("input:radio[name=moon]:checked").val();

    // $("output.destination1").hide(".myhidden");
    // $("output.destination2").hide(".myhidden");
    // $("output.destination3").hide(".myhidden");

    if (operator === "flight" && moon === "moon") {
      $(".destination1").removeClass("myhidden");
    }
    if (operator === "read-minds" && breakfast === "french-toast" || moon === "ocean") {
      $(".destination2").removeClass("myhidden");
    }
    if (operator === "invisibility" && moon === "moon") {
      $(".destination3").removeClass("myhidden");
    }
    else {
      $(".destination4").removeClass("myhidden");

    }
    // $(".output").text(result);
    event.preventDefault();
  });
});
