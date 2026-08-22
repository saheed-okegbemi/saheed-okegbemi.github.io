document.addEventListener("DOMContentLoaded", function () {
  var scroller = document.querySelector(".dash-scroll");
  var track = document.querySelector(".dash-track");
  var dotsWrap = document.querySelector(".dash-dots");
  if (!scroller || !track) return;

  var cards = track.children;
  var originalCount = cards.length / 2; // second half is a duplicate set for a seamless loop
  var index = 0;
  var paused = false;
  var timer = null;

  function sizeCards() {
    var w = scroller.offsetWidth;
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.width = w + "px";
    }
    track.style.width = (w * cards.length) + "px";
    return w;
  }

  // Build dot indicators
  var dots = [];
  if (dotsWrap) {
    for (var i = 0; i < originalCount; i++) {
      var dot = document.createElement("span");
      dot.className = "dot" + (i === 0 ? " active" : "");
      (function (targetIndex) {
        dot.addEventListener("click", function () {
          goTo(targetIndex);
        });
      })(i);
      dotsWrap.appendChild(dot);
      dots.push(dot);
    }
  }

  function updateDots() {
    var activeIndex = index % originalCount;
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === activeIndex);
    });
  }

  function render(animate) {
    var cardWidth = sizeCards();
    track.style.transition = animate ? "transform 0.6s cubic-bezier(.4,0,.2,1)" : "none";
    track.style.transform = "translateX(-" + cardWidth * index + "px)";
    updateDots();
  }

  function advance() {
    if (paused) return;
    index++;
    render(true);
    if (index === originalCount) {
      setTimeout(function () {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        index = 0;
        updateDots();
      }, 620);
    }
  }

  function goTo(targetIndex) {
    index = targetIndex;
    render(true);
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(advance, 3200);
  }

  render(false);
  resetTimer();

  scroller.addEventListener("mouseenter", function () { paused = true; });
  scroller.addEventListener("mouseleave", function () { paused = false; });

  window.addEventListener("resize", function () { render(false); });
});
