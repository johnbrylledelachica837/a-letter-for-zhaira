// =========================
// OPENING → ENVELOPE
// =========================

const openButton = document.getElementById("openButton");
const opening = document.querySelector(".opening");
const envelopeScreen = document.getElementById("envelopeScreen");

openButton.addEventListener("click", function () {

    opening.classList.add("hide-screen");
    envelopeScreen.classList.add("show");

});


// =========================
// ENVELOPE
// =========================

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", function () {

    envelope.classList.add("open");

});


// =========================
// ENVELOPE → LETTER
// =========================

const continueButton = document.getElementById("continueButton");
const letterScreen = document.getElementById("letterScreen");

continueButton.addEventListener("click", function () {

    envelopeScreen.classList.remove("show");
    envelopeScreen.classList.add("hide-screen");

    letterScreen.classList.add("show");

});


// =========================
// LETTER → MEMORIES
// =========================

const nextLetterButton =
    document.getElementById("nextLetterButton");

const memoriesScreen =
    document.getElementById("memoriesScreen");

nextLetterButton.addEventListener("click", function () {

    letterScreen.classList.remove("show");
    letterScreen.classList.add("hide-screen");

    memoriesScreen.classList.add("show");

});


// =========================
// MEMORIES → SURPRISE
// =========================

const memoryNextButton =
    document.getElementById("memoryNextButton");

const surpriseScreen =
    document.getElementById("surpriseScreen");

memoryNextButton.addEventListener("click", function () {

    memoriesScreen.classList.remove("show");
    memoriesScreen.classList.add("hide-screen");

    surpriseScreen.classList.add("show");

});


// =========================
// GIFT → RING LETTER
// =========================

const giftBox =
    document.getElementById("giftBox");

const ringLetterScreen =
    document.getElementById("ringLetterScreen");

giftBox.addEventListener("click", function () {

    giftBox.classList.add("open");

    setTimeout(function () {

        surpriseScreen.classList.remove("show");
        surpriseScreen.classList.add("hide-screen");

        ringLetterScreen.classList.add("show");

    }, 1500);

});


// =========================
// RING LETTER → FINAL
// =========================

const finalButton =
    document.getElementById("finalButton");

const finalScreen =
    document.getElementById("finalScreen");

finalButton.addEventListener("click", function () {

    ringLetterScreen.classList.remove("show");
    ringLetterScreen.classList.add("hide-screen");

    finalScreen.classList.add("show");

});


// =========================
// MUSIC
// =========================

const musicButtons =
    document.querySelectorAll(".music-btn");

const backgroundMusic =
    document.getElementById("backgroundMusic");

musicButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedSong =
            button.dataset.song;

        backgroundMusic.src = selectedSong;

        backgroundMusic.play();

        musicButtons.forEach(function (btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

    });

});