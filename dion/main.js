$(document).ready(function () {

  // fade in animation
  $(".movie").hide().each(function (i) {
    $(this).delay(i * 50).fadeIn(300);
  });

  // hover effect
  $(".movie").hover(
    function () {
      $(this).css({
        transform: "scale(1.08)",
        boxShadow: "0 0 15px red"
      });
    },
    function () {
      $(this).css({
        transform: "scale(1)",
        boxShadow: "none"
      });
    }
  );

  // CLICK → open movie page
  $(".movie").click(function () {
    let title = $(this).find("p").text();
    window.location.href = "movie.html?title=" + encodeURIComponent(title);
  });

  // SEARCH
  $("#search").on("keyup", function () {
    let value = $(this).val().toLowerCase().trim();

    $(".movie").each(function () {
      let title = $(this).find("p").text().toLowerCase();

      if (value === "") {
        $(this).show();
      } else if (title.includes(value)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

});