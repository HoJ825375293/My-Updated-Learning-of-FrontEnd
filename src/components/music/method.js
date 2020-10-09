var audio = new Audio("./NewRomantics.flac")
audio.addEventListener("timeupdate", function(){
    document.getElementById("totalTime").innerHTML = audio.duration;
    document.getElementById("currentTime").innerHTML = audio.currentTime;
}, true)

function aPlay() {
    audio.play()
}

function aGo() {
    audio.currentTime += 10;
    audio.play()
}

function aPause() {
    audio.pause()
}

function aBack() {
    audio.currentTime -= 10
    audio.play()
}

function aStop() {
    audio.currentTime = 0;
    audio.pause()
}


var formatTime = function(seconds) {
    var h = 0,
        i = 0,
        s = Math.floor(seconds);
        h = Math.floor(s / 3600);
        i = Math.floor((s % 3600) / 60);
        s = s % 3600 % 60
    
    return{
        H: h = h < 10 ? "0" + h : h,
        I: i = i < 10 ? "0" + i : i,
        S: s = s < 10 ? "0" + s : s
    }
}

function getDom(selector) {
    return document.querySelectorAll(selector);
}

/*
function bindEvent(ele, evnetType, callback) {
    console.log(ele, evnetType, callback)
    if(ele === undefined){
        console.log("bindEvent undefined")
    }else if(typeof ele.addEventListener == "function"){
        ele.addEventListener(evnetType, callback, false)
    }else if(typeof ele.attachEvent == "function"){
        ele.attachEvent(evnetType, callback, false)
    }else{
        ele.addEventListener(evnetType, callback, false)
    }
}
*/

function init() {
    var audio = new Audio("./NewRomantics.flac");

    var playBtn = document.getElementById("playBox"),
        progressBox = getDom(".progressBox")[0],
        progressBar = getDom(".progressBar")[0],
        curTime = getDom(".curTime")[0],
        songTime = getDom(".totalTime")[0],
        singerName = getDom("#singerName")[0],
        songName = getDom("#songName")[0],
        volume = getDom(".volume")[0],
        volBar = getDom("#volBar")[0],
        muteBtn = getDom("#muteBtn");

    playBtn.addEventListener("click", function() {
        mainPlay()
    }, false)

    
    var isDrag = false;
    var index = 0;
    var audio_m = 230.4,
        audio_s = 0,
        curH = 0,
        curM = 0,
        curS = 0;
    var musicData = [
        {
            "src":"./NewRomantics.flac",
            "bg":"./musicDisc.jpg",
            "songNmae": "New Romantics",
            "singerName": "Taylor Swift",
            "lm": 3,
            "ls": 50
        }
    ]

    function initPlay() {
        audio.pause();
        audio.volume = Math.round(volBar.offsetWidth / volume.offsetWidth * 100) / 100;
    }

    function mainPlay() {
        let temp = document.getElementById("playBox").getElementsByTagName("div")[0]
        console.log(temp)
        if(temp.className === "play"){
            //playBtn = <div className="playBox">{ pausen() }</div>
            audio.play()
        }else{
            //playBtn = <div className="playBox">{ playn() }</div>
            audio.pause()
        }
    }

    /*
    audio.addEventListener("timeupdate", function() {
        console.log("1")
        if(!isDrag){
            
            curM = Math.floor(audio.currentTime / 60);
            curS = Math.round(audio.currentTime - curM * 60);
            curM = curM < 10 ? "0" + curM : curM;
            curS = curS < 10 ? "0" + curS : curS;
            curTime.innerHTML = curM + ":" + curS;

            var curLong = Math.round(audio.currentTime / audio.duration * (progressBox.offsetWidth - 16))
            progressBar.style.width = curLong + "px";
            
        }
    }, false)
    */

    console.log("initPlay()");
    initPlay()
}