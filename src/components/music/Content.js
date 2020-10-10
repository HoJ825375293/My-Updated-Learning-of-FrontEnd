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
//import { Button } from 'antd';
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

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isPlay: false
        }
    }

    componentDidMount() {
        document.getElementById("playBox").addEventListener("click", this.mainPlay)
    }

    mainPlay = () => {
        const { isPlay } = this.state

        const audio = document.getElementById("audio");
        if( isPlay ){
            this.setState({isPlay:false})
            audio.play()
        }else{
            this.setState({isPlay:true})
            audio.pause()
        }
    }

    getPlayBtn = () => {
        if(this.state.isPlay){
            return playn()
        }else{
            return pausen()
        }
    }



    render() {
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
                    onTimeUpdate={this.onTimeUpdate}
                    >
                    <track src="http://music.xf1433.com/up/view.php/6527cbe718e81364c98e007c8bf60f1e.mp3" kind="captions" />
                </audio>
                <div className="main">
                    <div className="headBox clearFix">
                        <div className="goBack">
                        <ArrowLeftOutlined />
                        </div>
				        <div className="title">
					        <p className="songName" id="songName">New Romantics</p>
					        <p className="singer" id="singerName">Taylor Swift</p>
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
                        <div className="progressBox">
                            <div className="curTime">0:00</div>
                            <div className="progressBar">
                                <span className="progressArc"></span>
                            </div>
                            <div className="totalTime">3:50</div>
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