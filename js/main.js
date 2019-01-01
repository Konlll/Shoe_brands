$(document).ready(function() {
  $("body").css("display", "none");
  $("body").fadeIn(5000);

  $("p.lead, h1.display-4").css("display", "none");
  $(".jumbotron").hover(
    function() {
      $(".lead, .display-4")
        .delay(4000)
        .fadeIn(3000);
    },
    function() {}
  );
});
