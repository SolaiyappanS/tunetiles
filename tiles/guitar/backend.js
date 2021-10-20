var keys = ['E','R','T','Y','U','D','F','G','H','J','I'];

function playNote(code){
    var audio;
    if(keys.indexOf(code) != -1){
        audio = document.getElementById("key"+code);
        document.getElementById("button"+code).style.backgroundColor = '#637c42';
        document.getElementById("button"+code).style.boxShadow = '0 10px 30px rgb(1 1 1 / 0.2)';
        audio.currentTime = 0;
        audio.play();
        if(code=='I'){
            for(var i=0; i<keys.length; i++){
                audio = document.getElementById("key"+keys[i]);
                audio.pause();
                audio.currentTime = 0;
            }
        }
    }
}

document.addEventListener('keydown', playKey);
document.addEventListener('keyup', normal);

function playKey(e) {
    playNote((e.key).toUpperCase());
}

function normal(){
    initialSetup();
}

function initialSetup(){
    for(var i=0; i<keys.length; i++){
        document.getElementById("button"+keys[i]).style.backgroundColor = '#6a8c52';
        document.getElementById("button"+keys[i]).style.boxShadow = 'none';
    }
}