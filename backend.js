var keys = ['Q','W','E','R','T','A','S','D','F','G','Z','X','C','V','B']

function playNote(code){
    if(keys.indexOf(code) != -1){
        var audio = document.getElementById("key"+code);
        document.getElementById("button"+code).style.backgroundColor = '#31b2c8';
        audio.currentTime = 0;
        audio.play();
    }
}

document.addEventListener('keydown', playKey);
document.addEventListener('keyup', normal);

function playKey(e) {
    playNote((e.key).toUpperCase())
}

function normal(){
    initialSetup();
}

function initialSetup(){
    for(var i=0; i<15; i++){
        document.getElementById("button"+keys[i]).style.backgroundColor = '#21a2b8';
    }
}