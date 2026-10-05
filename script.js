const intro = document.getElementById("intro");
const mainContent = document.getElementById("main-content");
const skipIntro = document.getElementById("skipIntro");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

document.body.classList.add("no-scroll");


/* =====================================================
   INTRO STATE
===================================================== */

let introFinished = false;


/* =====================================================
   SHOW PORTFOLIO
===================================================== */

function showPortfolio() {

    if (introFinished) {
        return;
    }

    introFinished = true;

    intro.classList.add("hide");

    mainContent.classList.add("show");

    document.body.classList.remove("no-scroll");

    setTimeout(() => {
        revealElements();
    }, 300);
}


/* =====================================================
   INTRO TIMER
===================================================== */

const introDuration = 3500;

setTimeout(() => {

    showPortfolio();

}, introDuration);


/* =====================================================
   SKIP INTRO
===================================================== */

skipIntro.addEventListener("click", () => {

    showPortfolio();

});


/* =====================================================
   MOBILE MENU
===================================================== */

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const navigationItems =
    navLinks.querySelectorAll("a");

navigationItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = () => {

    const elements =
        document.querySelectorAll(".reveal");

    elements.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (
            elementTop <
            windowHeight - revealPoint
        ) {

            element.classList.add("active");

        }

    });

};


/* =====================================================
   SCROLL EVENT
===================================================== */

window.addEventListener(
    "scroll",
    revealElements
);


/* =====================================================
   INITIAL REVEAL
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        revealElements();

    }, 500);

});


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navLinks.classList.remove("open");

    }

});