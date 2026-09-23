// =========================
// LOGIN MODE
// =========================

// Hide the website while login is active
document.body.classList.add("login-active");


// =========================
// OPENING → ENVELOPE
// =========================

const openButton =
    document.getElementById("openButton");

const opening =
    document.querySelector(".opening");

const envelopeScreen =
    document.getElementById("envelopeScreen");


openButton.addEventListener("click", function () {

    opening.classList.add("hide-screen");

    envelopeScreen.classList.add("show");

});


// =========================
// ENVELOPE
// =========================

const envelope =
    document.getElementById("envelope");


envelope.addEventListener("click", function () {

    envelope.classList.add("open");

});


// =========================
// ENVELOPE → LETTER
// =========================

const continueButton =
    document.getElementById("continueButton");

const letterScreen =
    document.getElementById("letterScreen");


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


        backgroundMusic.src =
            selectedSong;


        backgroundMusic.play();


        musicButtons.forEach(function (btn) {

            btn.classList.remove("selected");

        });


        button.classList.add("selected");

    });

});


// =========================
// LOGIN
// =========================

const loginScreen =
    document.getElementById("loginScreen");

const loginButton =
    document.getElementById("loginButton");

const loginEmail =
    document.getElementById("loginEmail");

const loginPassword =
    document.getElementById("loginPassword");

const loginError =
    document.getElementById("loginError");


loginButton.addEventListener("click", function () {

    const email =
        loginEmail.value;

    const password =
        loginPassword.value;


    // =========================
    // CORRECT LOGIN
    // =========================

    if (
        email === "tolentino.464047@tarlac.sti.edu.ph" &&
        password === "BSITSCL_tlntn777"
    ) {

        // Hide login
        loginScreen.style.display = "none";


        // Allow website to appear
        document.body.classList.remove("login-active");


        // Show opening screen
        opening.classList.remove("hide-screen");

        opening.style.display = "flex";

        opening.style.opacity = "1";

        opening.style.visibility = "visible";

        opening.style.zIndex = "10";


    } else {

        // Wrong login
        loginError.textContent =
            "Incorrect email or password. Try again.";

    }

});


// =========================
// MEMORY CLICK REVEAL
// =========================

const memoryPhotos =
    document.querySelectorAll(".memory-photo");


memoryPhotos.forEach(function (photo) {

    photo.addEventListener("click", function () {

        photo.classList.toggle("show-message");

    });

});
