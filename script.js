// var color1 = new Color(245, 223, 207);
// var color2 = new Color(195,216,197);
// var color3 = new Color(255, 255, 255);
function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);



  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);


  ScrollTrigger.scrollerProxy("#main", {
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
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


  ScrollTrigger.refresh();
}
locomotiveAnimation();

function navbarAnimation() {
  gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
}
navbarAnimation()

function videoconAnimation() {
  var videocon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 70,
      top: dets.y - 80,
    });
  });
}
videoconAnimation();

function loadinganimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}
loadinganimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });



  const colors = ["rgba(245, 223, 207)", "pink", "rgb(195,216,197)"];

  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
        backgroundColor: randomColor
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}
cursorAnimation();
// let col= document.querySelector(".col");
// let col1= document.querySelector(".col1");
// let col2= document.querySelector(".col2");
// col.style.backgroundColor="rgb(195,216,197)";
//   col1.style.backgroundColor="rgb(245, 223, 207)";
//   col2.style.backgroundColor="rgb(255, 255, 255)";


function tsted() {
  let tsts = document.querySelectorAll("#tst");
  var info = document.querySelector(".info");

  tsts.forEach((tst, index) => {
    // tst[0].style.backgroundColor="rgb(195, 216, 197)";
    // tst[1].style.backgroundColor="rgb(245, 223, 207)";
    // tst[2].style.backgroundColor="rgb(255, 255, 255)";
    tst.addEventListener("mouseenter", function () {
      // Set CSS properties for mouseenter event
      // switch (index) {
      //   case 0:
      //     tst.style.backgroundColor = "rgb(195, 216, 197)";
      //     break;
      //   case 1:
      //     tst.style.backgroundColor = "rgb(245, 223, 207)";
      //     break;
      //   case 2:
      //     tst.style.backgroundColor = "rgb(255, 255, 255)";
      //     break;
      //   // Add more cases for additional elements and colors
      //   default:
      //     break;
      // }

      // tst.style.width = "50%";
      // tst.style.height = "2vw";
      // tst.style.paddingTop = "2vw";
      // tst.style.top = "48%";
      // tst.style.paddingBottom = "10vw";
      // tst.style.zIndex = "8";
      // tst.style.position = "absolute";
      // tst.style.borderRadius = "25px";
      tst.querySelector(".info").style.height = "20vh"
      tst.querySelector(".info").style.opacity = 1

    });

    tst.addEventListener("mouseleave", function () {
      // Set CSS properties for mouseleave event to revert to original form
      switch (index) {
        case 0:
          tst.style.backgroundColor = "rgb(195, 216, 197)";
          break;
        case 1:
          tst.style.backgroundColor = "rgb(245, 223, 207)";
          break;
        case 2:
          tst.style.backgroundColor = "rgb(255, 255, 255)";
          break;
        // Add more cases for additional elements and colors
        default:
          break;
      }
      // tst[0].style.backgroundColor = "rgb(195, 216, 197)";
      // tst[1].style.backgroundColor = "rgb(245, 223, 207)";
      // tst[2].style.backgroundColor = "rgb(255, 255, 255)";
      // tst.style.height = "max-content";
      // tst.style.borderRadius = "50px";
      // tst.style.width = "70%";
      // tst.style.padding = "0 1vw";
      // tst.style.paddingTop = 0;
      // tst.style.paddingBottom = "0vw";
      // tst.style.position = "absolute";
      // tst.style.zIndex = "9";
      // tst.style.backgroundColor = "rgb(195, 216, 197)"; // Set the original color
      tst.querySelector(".info").style.height = 0
      tst.querySelector(".info").style.opacity = 0

    });
  });
}

tsted();



function page2boxes() {
  let tsts = document.querySelectorAll("#tst");

}
page2boxes();

document.addEventListener("mousemove", function (dets) {
  gsap.to(".cursor", {
    left: dets.x,
    top: dets.y,
  })
})

document.querySelectorAll(".img").forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      transform: `translate(-50%, -50%) scale(1)`,
    });
    element.classList.add("cursor-pointer");
  });

  element.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      transform: `translate(-50%, -50%) scale(0)`,
    });
    element.classList.remove("cursor-pointer");
  });
});



var icon = document.getElementById("icon");
var packet = document.getElementsByClassName("packet");
var overlay_head = document.getElementsByClassName("overlay-head");
var overlay_content = document.getElementsByClassName("overlay-content");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun-icon2.webp";
    for (let i = 0; packet.length; i++) {
      packet[i].classList.add("packet1");
      overlay_head[i].classList.add("overlay-head1");
      overlay_content[i].classList.add("overlay-content1");
    }
  }
  else {
    icon.src = "moon-icon.png";
    for (let i = 0; packet.length; i++) {
      packet[i].classList.remove("packet1");
      overlay_head[i].classList.remove("overlay-head1");
      overlay_content[i].classList.remove("overlay-content1");
    }
  }
}

let infoInnerDiv = document.querySelectorAll(".info-inner-div")
infoInnerDiv.forEach((div) => {
  div.addEventListener("mouseenter", function () {
    div.querySelector("img").style.height = "100%"
    div.querySelector("p").style.opacity = 0

  })
  div.addEventListener("mouseleave", function () {
    div.querySelector("img").style.height = "70%"
    div.querySelector("p").style.opacity = 1

  })
})

document.querySelector(".ham6").addEventListener("click", function () {
  document.querySelector("#topbar").classList.toggle("showTopBar");
  document.querySelector("#nav").classList.toggle("dropped");
  document.querySelectorAll(".line").forEach((line) => {
    line.classList.toggle("cross")
  });
  document.querySelectorAll(".right-div-child").forEach((p) => {
    p.classList.toggle("move-up")
  })
  document.querySelectorAll(".left-top-child").forEach((div) => {
    div.classList.toggle("move-up-child")
  })
  document.querySelectorAll(".left-bottom-child").forEach((div) => {
    div.classList.toggle("show-child")
  })

})

/*Footer animation*/
var video = document.querySelector(".video-background");
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, { threshold: 0.5 });
observer.observe(video);
gsap.from("#img1 , #img2", {
  x: 100,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page5",
    //  markers:true,
    start: "top 100%",
    end: "top -30%",
    scroller: "#main",
    scrub: 5,
  }
}
);
gsap.from("#head1 ,#head2, #text1", {
  x: -100,
  duration: 2,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".page5",
    //  markers:true,
    start: "top 100%",
    end: "top -30%",
    scroller: "#main",
    scrub: 5,
  }
}
);
