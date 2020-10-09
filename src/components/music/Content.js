import React from 'react';
import { 
//AudioMutedOutlined,
ArrowLeftOutlined,
StepBackwardOutlined,
StepForwardOutlined,
PlayCircleFilled,
SoundOutlined,
//PauseCircleFilled
} from '@ant-design/icons';
//import { Button } from 'antd';
import "./content.css";
import AutoPlay from "./AutoPlay";

var playn = function () {
    return (
        <div className="play"><PlayCircleFilled style={{color:"black"}}/></div>
    )
}
/*
var pausen = function () {
    return (
        <div className="pause"><PauseCircleFilled style={{color:"black"}}/></div>
    )
}
*/

class Content extends React.Component {

    componentDidMount() {
        console.log("componet did mount()");
        //init()
    }

    render() {
        return(
            <div>
                
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
                        <div id="playBox">{ playn() }</div>
                        <div className="next"><StepForwardOutlined style={{color:"black"}}/></div>
                    </div>
                </div>
                <div className="blur">
		        </div>
            </div>
        )
    }
}

export default Content;