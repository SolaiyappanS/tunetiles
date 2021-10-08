var colors = ['#ff9066','#fc7c4e','#dd653a','#e2673a','#ad593a'];
var keys = ['Q','W','E','R','T','A','S','D','F','G','Z','X','C','V','B']

function playNote(code){
    if(keys.indexOf(code) != -1){
        var audio = document.getElementById("key"+code);
        initialSetup();
        audio.currentTime = 0;
        audio.play();
    }
}

document.addEventListener('keydown', playKey);
document.addEventListener('keyup', normal);

function playKey(e) {
    playNote((e.key).toUpperCase())
}

function initialSetup(){
    var color;
    for(var i=0; i<15; i++){
        color = Math.floor(Math.random() * colors.length);
        document.getElementById("button"+keys[i]).style.backgroundColor = colors[color];
    }
}