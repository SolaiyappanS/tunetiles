var keys = ['T','Y','U','G','H','J'];

function playNote(code){
    var audio;
    if(keys.indexOf(code) != -1){
        for(var i=0; i<keys.length; i++){
            audio = document.getElementById("key"+keys[i]);
            audio.currentTime = 0;
            audio.pause();
        }
        audio = document.getElementById("key"+code);
        document.getElementById("button"+code).style.backgroundColor = '#808003';
        document.getElementById("button"+code).style.boxShadow = '0 10px 30px rgb(1 1 1 / 0.2)';
        audio.currentTime = 0;
        audio.play();
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
        document.getElementById("button"+keys[i]).style.backgroundColor = '#909203';
        document.getElementById("button"+keys[i]).style.boxShadow = 'none';
    }
}