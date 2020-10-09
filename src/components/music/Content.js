import React from 'react';
import { 
AudioMutedOutlined,
ArrowLeftOutlined,
StepBackwardOutlined,
StepForwardOutlined,
PlayCircleFilled
} from '@ant-design/icons';
  
import "./content.css"

class Content extends React.Component {


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
					        <div id="muteBtn"><i id="volumeTag"><AudioMutedOutlined /></i></div>
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
                        <div className="play"><PlayCircleFilled style={{color:"black"}}/></div>
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