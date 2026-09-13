/* =========================
   NAVIGATION DES ÉCRANS
========================= */

const screens = document.querySelectorAll(".screen");

function showScreen(screenNumber) {

    screens.forEach((screen) => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(`screen${screenNumber}`);

    if (target) {
        target.classList.add("active");
    }
}


/* =========================
   ÉCRAN 1 → ÉCRAN 2
========================= */

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
    showScreen(2);
});


/* =========================
   ÉCRAN 2 → ÉCRAN 3
========================= */

const messageButton = document.getElementById("messageButton");

messageButton.addEventListener("click", () => {
    showScreen(3);
});


/* =========================
   ÉCRAN 3 → COMPTE À REBOURS
========================= */

const letterButton = document.getElementById("letterButton");

letterButton.addEventListener("click", () => {

    showScreen(4);

    startCountdown();

});


/* =========================
   COMPTE À REBOURS
========================= */

let countdownStarted = false;

function startCountdown() {

    if (countdownStarted) {
        return;
    }

    countdownStarted = true;

    const number = document.getElementById("countdownNumber");

    let count = 5;

    number.textContent = count;

    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            number.textContent = count;

        } else {

            clearInterval(timer);

            number.textContent = "♡";

            setTimeout(() => {

                showScreen(5);

                countdownStarted = false;

            }, 900);
        }

    }, 1000);
}


/* =========================
   ENVELOPPE
========================= */

const envelope = document.getElementById("envelope");
const tapText = document.getElementById("tapText");

envelope.addEventListener("click", () => {

    if (envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    tapText.style.opacity = "0";

    setTimeout(() => {

        showScreen(6);

    }, 1800);

});