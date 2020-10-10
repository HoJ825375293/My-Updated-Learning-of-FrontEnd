import React from 'react';
import { 
//AudioMutedOutlined,
ArrowLeftOutlined,
StepBackwardOutlined,
StepForwardOutlined,
PlayCircleFilled,
SoundOutlined,
PauseCircleFilled
} from '@ant-design/icons';
//import { Slider } from 'antd';
import "./content.css";
//import AutoPlay from "./AutoPlay";

var playn = function () {
    return (
        <div className="play"><PlayCircleFilled style={{color:"black"}}/></div>
    )
}

var pausen = function () {
    return (
        <div className="pause"><PauseCircleFilled style={{color:"black"}}/></div>
    )
}

var musicList = [
    {
        "src": "http://music.xf1433.com/up/view.php/6527cbe718e81364c98e007c8bf60f1e.mp3",
        "bg": "url(" + require('./musicDisc.jpg') + ")",
        "songName": "New Romantics",
        "singerName": "Taylor Swift"
    },{
        "src": "http://music.xf1433.com/up/view.php/81cf3247587a70cde6f03838bdfbfe64.mp3",
        "bg": "url(" + require('./lostRiver.jpg') + ")",
        "songName": "The Lake of Oblivision",
        "singerName": "Asteria"
    }
]

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            totalTime: "00:00",
            isPlay: false,
            currentTime: "00:00",
            musicIndex: 0,
            songName: musicList[0].songName,
            singerName: musicList[0].singerName
        }
    }

    componentDidMount() {
        document.getElementById("playBox").addEventListener("click", this.mainPlay)
        document.getElementsByClassName("prev")[0].addEventListener("click", this.onSongPrev)
        document.getElementsByClassName("next")[0].addEventListener("click", this.onSongNext)
        const audio = document.getElementById("audio");
        const volume = document.getElementById("volume")
        const volBar = document.getElementById("volBar")
        audio.volume = Math.round(volBar.offsetWidth / volume.offsetWidth * 100) / 100;
        //audio.addEventListener("timeupdate", this.onTimeChange)
    }

    formatTime = (num) => {
        let minute, seconde
        minute = Math.floor(num / 60)
        seconde = Math.floor(num - minute * 60) 
        minute = minute < 10 ? "0" + minute : minute;
        seconde = seconde < 10 ? "0" + seconde : seconde;
        return minute + ":" + seconde
    }

    onTimeChange = () => {
        const audio = document.getElementById("audio");
        const progressBar = document.getElementsByClassName("progressBar")[0]
        const progressBox = document.getElementsByClassName("progressBox")[0]
        
        if (audio.currentTime === audio.duration) {
            this.setState({
              isPlay: false,
            });
        }
        const currentTime = this.formatTime(audio.currentTime)
        this.setState({
            currentTime:currentTime
        })
        var curLong = Math.round(audio.currentTime / audio.duration * (progressBox.offsetWidth - 16))
        progressBar.style.width = curLong + "px"
    }

    mainPlay = () => {
        const { isPlay } = this.state

        if( isPlay ){
            this.pause()
        }else{
            this.play()
        }
    }

    play = () => {
        const audio = document.getElementById("audio");
        audio.play()
        this.setState({isPlay:true})
    }

    pause = () => {
        const audio = document.getElementById("audio");
        audio.pause()
        this.setState({isPlay:false})
    }

    getPlayBtn = () => {
        if(this.state.isPlay){
            return pausen()
        }else{
            return playn()
        }
    }

    onCanPlay = () => {
        const audio = document.getElementById("audio");
        this.setState({
            totalTime: this.formatTime(audio.duration),
            currentTime: "00:00"
        })
    }

    onSongPrev = () => {
        let { musicIndex } = this.state
        let len = musicList.length
        let newIndex = (musicIndex + len - 1) % len;

        this.onSongChange(newIndex)
        this.setState({
            musicIndex: newIndex
        })
    }

    onSongNext = () => {
        let { musicIndex } = this.state
        let len = musicList.length
        let newIndex = (musicIndex + 1) % len;

        this.onSongChange(newIndex)
        this.setState({
            musicIndex: newIndex
        })
    }

    onSongChange = (i) => {
        const audio = document.getElementById("audio");
        const disc = document.getElementsByClassName("disc")[0]
        const blur = document.getElementsByClassName("blur")[0]
        this.pause()
        const newSrc = musicList[i].src;
        audio.src = newSrc
        this.setState({
            songName: musicList[i].songName,
            singerName: musicList[i].singerName
        })

        disc.style.background = musicList[i].bg + " no-repeat center top"
        disc.style.backgroundSize = "cover"
        blur.style.background = musicList[i].bg + " no-repeat center top"
        blur.style.backgroundSize = "cover"
        this.play()
    }

    render() {
        const {currentTime, totalTime, songName, singerName} = this.state

        return(
            <div>
                <audio
                    id="audio"
                    src="http://music.xf1433.com/up/view.php/6527cbe718e81364c98e007c8bf60f1e.mp3"
                    ref={(audio) => {
                        this.audioDom = audio;
                    }}
                    preload={"auto"}
                    onCanPlay={this.onCanPlay}
                    onTimeUpdate={this.onTimeChange}
                    >
                    {/*<track src="http://music.xf1433.com/up/view.php/6527cbe718e81364c98e007c8bf60f1e.mp3" kind="captions" /> */}
                </audio>
                <div className="main">
                    <div className="headBox clearFix">
                        <div className="goBack">
                        <ArrowLeftOutlined />
                        </div>
				        <div className="title">
                            <p className="songName" id="songName">{ songName }</p>
                            <p className="singer" id="singerName">{ singerName }</p>
				        </div>
                    </div>
                    <div className="discBox">
				        <div className="volume" id="volume">
					        <div className="volBar" id="volBar">
						        <span className="volArc"></span>
					        </div>
					        <div id="muteBtn"><i id="volumeTag"><SoundOutlined /></i></div>
                            <div className="border"></div>
                            <div className="disc"></div>
                        </div>
				    </div>
                    <div className="controlBox">
                        <div className="progressBox" id="progressBox">
                            <div className="curTime">{currentTime}</div>
                            <div className="progressBar">
                                <span className="progressArc"></span>
                            </div>
                            <div className="totalTime">{totalTime}</div>
                        </div>
                        <div className="prev"><StepBackwardOutlined style={{color:"black"}}/></div>
                        <div id="playBox">{ this.getPlayBtn() }</div>
                        <div className="next"><StepForwardOutlined style={{color:"black"}}/></div>
                    </div>
                </div>
                <div className="blur">
		        </div>
                {/*<AutoPlay src="http://ossweb-img.qq.com/images/lol/m/act/a20160315live/shake_sound_male.mp3" id={123}/>*/}
                {/* http://ossweb-img.qq.com/images/lol/m/act/a20160315live/shake_sound_male.mp3 */ }
            </div>
        )
    }
}

export default Content;