var keys = ['1','2','3','4','5','6','7','8','9',
            'Q','W','E','R','T','Y','U','I','O',
            'A','S','D','F','G','H','J','K','L',
            'Z','X','C','V','B','N','M',',','.'];

var pressed = new Array(36);

function playNote(code){
    if(keys.indexOf(code) != -1){
        if(!pressed[keys.indexOf(code)]){
            pressed[keys.indexOf(code)] = true;
            var audio = document.getElementById("key"+code);
            var keyColor;
            if(keys.indexOf(code) < 9)
                keyColor = 'cyan';
            else if(keys.indexOf(code) < 18)
                keyColor = 'yellow';
            else if(keys.indexOf(code) < 27)
                keyColor = 'pink';
            else
                keyColor = 'orange';
            document.getElementById("button"+code).style.backgroundColor = keyColor;
            document.getElementById("button"+code).style.color = '#000';
            document.getElementById("button"+code).style.boxShadow = '0 10px 30px rgb(1 1 1 / 0.2)';
            audio.currentTime = 0;
            audio.play();
            audio.loop = true;
        }
        else{
            pressed[keys.indexOf(code)] = false;
            normal(code);
        }
    }
}

document.addEventListener('keydown', playKey);

function playKey(e) {
    playNote((e.key).toUpperCase());
}

function normal(code){
    var audio = document.getElementById("key"+code);
    document.getElementById("button"+code).style.backgroundColor = '#222';
    document.getElementById("button"+code).style.color = '#ddd';
    document.getElementById("button"+code).style.boxShadow = 'none';
    audio.pause();
}

function initialSetup(){
    for(var i=0; i<keys.length; i++){
        document.getElementById("button"+keys[i]).style.backgroundColor = '#222';
        document.getElementById("button"+keys[i]).style.color = '#ddd';
        document.getElementById("button"+keys[i]).style.boxShadow = 'none';
        for (i in pressed){
            pressed[i] = false;
        }
    }
}