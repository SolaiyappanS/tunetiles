var keys = ['W','E','R','T','Y','U','I','S','D','F','G','H','J','C','V','B','N']

function playNote(code){
    if(keys.indexOf(code) != -1){
        var audio = document.getElementById("key"+code);
        document.getElementById("button"+code).style.backgroundColor = '#1092a8';
        document.getElementById("button"+code).style.boxShadow = '0 10px 30px rgb(1 1 1 / 0.2)';
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
    for(var i=0; i<keys.length; i++){
        document.getElementById("button"+keys[i]).style.backgroundColor = '#31a2b8';
        document.getElementById("button"+keys[i]).style.boxShadow = 'none';
    }
}