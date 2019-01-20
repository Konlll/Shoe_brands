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

  // Shoes
  $("#zoom_01").elevateZoom({
    /*zoomType: "lens",
    lensShape: "round",
    lensSize: 170*/

    easing: true,
    zoomType: "inner",
    cursor: "crosshair"
  });

  $("#zoom_02").elevateZoom({
    /*zoomType: "lens",
    lensShape: "round",
    lensSize: 170*/

    easing: true,
    zoomType: "inner",
    cursor: "crosshair"
  });

  $("#zoom_03").elevateZoom({
    /*zoomType: "lens",
    lensShape: "round",
    lensSize: 170*/

    easing: true,
    zoomType: "inner",
    cursor: "crosshair"
  });

  $("#zoom_04").elevateZoom({
    /*zoomType: "lens",
    lensShape: "round",
    lensSize: 170*/

    easing: true,
    zoomType: "inner",
    cursor: "crosshair"
  });

  $("#zoom_05").elevateZoom({
    /*zoomType: "lens",
    lensShape: "round",
    lensSize: 170*/

    easing: true,
    zoomType: "inner",
    cursor: "crosshair"
  });

  $("#zoom_06").elevateZoom({
    /*zoomType: "lens",
    lensShape: "round",
    lensSize: 170*/

    easing: true,
    zoomType: "inner",
    cursor: "crosshair"
  });
});
