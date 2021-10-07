function playNote(code){
    var audio = document.getElementById("key"+code);
    document.getElementById("button"+code).classList = 'play';
    audio.currentTime = 0;
    audio.play();
}

document.addEventListener('keydown', playKey);
document.addEventListener('keyup', normal);

function playKey(e) {
    playNote((e.key).toUpperCase())
}

function normal(e) {
    code = (e.key).toUpperCase();
    document.getElementById("button"+code).classList = 'regular';
}

function normall(code) {
    document.getElementById("button"+code).classList = 'regular';
}