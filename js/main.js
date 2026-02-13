const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const sticker = document.getElementById("sticker");
const letterOverlay = document.getElementById("letterOverlay");
const closeLetter = document.getElementById("closeLetter");
const music = document.getElementById("bgMusic");

// play lagu
music.volume = 0;
music.play();

// fade in volume
let vol = 0;
const fade = setInterval(() => {
    if(vol < 0.5){
        vol += 0.02;
        music.volume = vol;
    } else {
        clearInterval(fade);
    }
}, 200);

// ================= YES CLICK =================
yesBtn.addEventListener("click", function() {

    // ganti sticker happy
    sticker.src = "images/happy.png";
    message.innerHTML = "YEYYY THANKYOUUU ME!!! 😭💖";

    // background berubah
    document.body.style.background =
    "linear-gradient(to right, #ff4d88, #ff99cc)";


    // munculin surat
    setTimeout(() => {
        letterOverlay.style.display = "flex";
    }, 100);
});


// ================= NO BUTTON AUTO KABUR =================
document.addEventListener("mousemove", function(e) {

    const rect = noBtn.getBoundingClientRect();

    const distance = 100;

    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const dx = mouseX - btnX;
    const dy = mouseY - btnY;

    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < distance) {

        const newX = Math.random() * (window.innerWidth - 100);
        const newY = Math.random() * (window.innerHeight - 50);

        noBtn.style.position = "absolute";
        noBtn.style.left = newX + "px";
        noBtn.style.top = newY + "px";

        const images = [
            "images/cry1.png",
            "images/cry2.png",
            "images/sad.png"
        ];

        sticker.src = images[Math.floor(Math.random() * images.length)];
        message.innerHTML = "Pliss jangan pilih NO ME. COBA DEH YES DULU! 😭";

        // YES makin gede tiap dia gagal ngejar NO 😈
        yesBtn.style.transform += " scale(1.05)";
    }
});


// ================= CLOSE LETTER =================
closeLetter.addEventListener("click", function() {
    letterOverlay.style.display = "none";
    music.pause();
});


