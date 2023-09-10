"use strict";
/* mobile navigation start */

window.addEventListener("DOMContentLoaded", function () {
  /*--Menu Dropdown code---*/
  const menu = document.querySelector(".menu");
  const openMenu = document.querySelector(".open-menu-btn");
  const closeMenu = document.querySelector(".close-menu-btn");
  [openMenu, closeMenu].forEach((btn) => {
    btn.addEventListener("click", function () {
      menu.classList.toggle("open");
      menu.style.transition = "transform 0.5s ease";
    });
  });
  menu.addEventListener("transitionend", function () {
    this.removeAttribute("style");
  });
  closeMenu.addEventListener("click", function () {
    document.querySelectorAll(".dropdown").forEach((ele) => {
      if (ele.classList.contains("active")) {
        ele.classList.remove("active");
      }
    });
  });
  menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function () {
      this.closest(".dropdown").classList.toggle("active");
    });
  });
  /*--Count down code--*/
  const daysEl = document.getElementById("day");
  const hoursEl = document.getElementById("hrs");
  const minsEL = document.getElementById("min");
  const secondsEL = document.getElementById("sec");

  const newYears = "20 June 2024";

  function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minsEL.innerText = minutes;
    secondsEL.innerText = seconds;
  }
  if (daysEl && hoursEl && minsEL && secondsEL) {
    setInterval(countdown, 1000);
  }
  /*---Email subscribtion js----*/
  const submit = document.getElementById("subscribtion");
  submit.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailId = document.getElementById("emailSubscription").value;
    // console.log(emailId);
    if (emailId !== "") {
      const data = {
        email: emailId,
      };
      // api code come here

      // DOM manipulation
      e.submitter.setAttribute("disabled", "true");
      const footer = document.getElementById("footer");
      const sweetNotification = document.createElement("div");
      sweetNotification.classList.add("notification");
      sweetNotification.innerHTML = `
        <p>Notifications are enabled for ${emailId}</p>
      `;
      footer.insertAdjacentElement("afterend", sweetNotification);
      document.getElementById("emailSubscription").value = "";
      setTimeout(() => {
        sweetNotification.remove();
        e.submitter.removeAttribute("disabled");
      }, 5000);
    }
  });
});
/* mobile navigation end */

$(document).ready(function ($) {
  function animateElements() {
    $(".progressbar").each(function () {
      let elementPos = $(this).offset().top;
      let topOfWindow = $(window).scrollTop();
      let percent = $(this).find(".circle").attr("data-percent");
      //   let percentage = parseInt(percent, 10) / parseInt(100, 10);
      let animate = $(this).data("animate");
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data("animate", true);
        $(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            size: 150,
            thickness: 10,
            emptyFill: "rgba(0,0,0, .2)",
            fill: {
              color: "#7bc5a1",
            },
          })
          .on(
            "circle-animation-progress",
            function (event, progress, stepValue) {
              $(this)
                .find("div")
                .text((stepValue * 100).toFixed(1) + "%");
            }
          )
          .stop();
      }
    });
  }

  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);
  $("#bar1").barfiller();
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    pagination: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
}); //end document ready function
