const textData = {
    miss_you: "Whenever you feel lonely, remember… someone is thinking about you.",
    sad: "It's okay to feel sad. Your heart is stronger than you think.",
    overthinking: "Breathe… slow… you’re safe. Let your thoughts rest.",
    self_doubt: "You are capable. You are enough. Trust yourself.",
    crying: "Let the tears fall… they are cleansing your heart."
};

let audio = document.getElementById("player");
let isPlaying = false;

function playAudio(name) {
    audio.src = `audio/${name}.mp3`;
    audio.play();
    isPlaying = true;

    typeText(textData[name]);
}

function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
}

function typeText(text) {
    const box = document.getElementById("typingText");
    box.innerHTML = "";
    let i = 0;

    let interval = setInterval(() => {
        box.innerHTML += text[i];
        i++;
        if (i === text.length) clearInterval(interval);
    }, 35);
}
