$(function() {
  $("#submit").click(function(event) {

    var operator = $("input:radio[name=operator]:checked").val();

    // $("output.destination1").hide(".myhidden");
    // $("output.destination2").hide(".myhidden");
    // $("output.destination3").hide(".myhidden");

    if (operator === "flight") {
      $(".destination1").removeClass("myhidden");
    }
    if (operator === "read-minds") {
      $(".destination2").removeClass("myhidden");
    }
    if (operator === "invisibility") {
      $(".destination3").removeClass("myhidden");
    }
    // $(".output").text(result);
    event.preventDefault();
  });
});
