document.addEventListener("DOMContentLoaded", function () {
  var scroller = document.querySelector(".dash-scroll");
  var track = document.querySelector(".dash-track");
  if (!scroller || !track) return;

  var cards = track.children;
  var originalCount = cards.length / 2; // second half is a duplicate set for a seamless loop
  var index = 0;
  var paused = false;
  var resetTimeout = null;

  function stepWidth() {
    var style = getComputedStyle(track);
    var gap = parseFloat(style.columnGap || style.gap || 20);
    return cards[0].offsetWidth + gap;
  }

  function advance() {
    if (paused) return;
    index++;
    track.style.transition = "transform 0.7s cubic-bezier(.4,0,.2,1)";
    track.style.transform = "translateX(-" + stepWidth() * index + "px)";

    if (index === originalCount) {
      resetTimeout = setTimeout(function () {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        index = 0;
      }, 720);
    }
  }

  var timer = setInterval(advance, 3200);

  scroller.addEventListener("mouseenter", function () { paused = true; });
  scroller.addEventListener("mouseleave", function () { paused = false; });

  window.addEventListener("resize", function () {
    track.style.transition = "none";
    track.style.transform = "translateX(-" + stepWidth() * index + "px)";
  });
});
