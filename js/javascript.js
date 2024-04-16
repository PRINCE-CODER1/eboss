function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
function trigger() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".clients-sec",
      scroller: ".main",
      start: `15% 0`,
      end: `120% 50%`,
      pin: true,
      duration: 0.2,
      scrub: 2,
    },
  });
  tl.to("#scroll-1", {
    bottom: "60vh",
  });
  tl.to("#scroll-1", {
    opacity: 0,
  });
  tl.to(
    "#scroll-2",
    {
      opacity: 1,
    },
    "same"
  );
  tl.to(
    ".all-rev-img",
    {
      x: "-100%",
    },
    "same"
  );
  tl.to("#scroll-2", {
    bottom: "60vh",
  });

  tl.to("#scroll-2", {
    opacity: 0,
  });
  tl.to(
    "#scroll-3",
    {
      opacity: 1,
    },
    "same1"
  );
  tl.to(
    ".all-rev-img",
    {
      x: "-200%",
    },
    "same1"
  );
  tl.to("#scroll-3", {
    bottom: "60vh",
  });
  tl.to("#scroll-3", {
    opacity: 0,
  });
  tl.to(
    "#scroll-4",
    {
      opacity: 1,
    },
    "same2"
  );
  tl.to(
    ".all-rev-img",
    {
      x: "-300%",
    },
    "same2"
  );
}

function plusminus() {
  document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");

    questions.forEach((question) => {
      question.addEventListener("click", function () {
        const answer = this.nextElementSibling;

        // Close all answers
        document.querySelectorAll(".answer").forEach((answer) => {
          answer.classList.remove("show");
        });

        // Toggle the visibility of the clicked answer
        answer.classList.toggle("show");
      });
    });
  });
}
function showresnav() {
  const resnav = document.querySelector(".res-nav");
  resnav.classList.toggle("show");
}
loco();
trigger();
plusminus();
