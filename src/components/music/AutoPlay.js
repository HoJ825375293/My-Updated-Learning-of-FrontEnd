import React, { Component } from "react";

class AutoPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rateList: [1.0, 1.25, 1.5, 2.0],
      playRate: 1.0,
      isPlay: false,
      isMuted: false,
      volume: 100,
      allTime: 0,
      currentTime: 0,
    };
  }

  componentDidMount() {}

  formatSecond(time) {
    const second = Math.floor(time % 60);
    let minite = Math.floor(time / 60);
    return `${minite}:${second >= 10 ? second : `0${second}`}`;
  }

  // 该视频已准备好开始播放
  onCanPlay = () => {
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    this.setState({
      allTime: audio.duration,
    });
  };

  playAudio = () => {
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    audio.play();
    this.setState({
      isPlay: true,
    });
  };

  pauseAudio = () => {
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    audio.pause();
    this.setState({
      isPlay: false,
    });
  };

  onMuteAudio = () => {
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    this.setState({
      isMuted: !audio.muted,
    });
    audio.muted = !audio.muted;
  };

  changeTime = (e) => {
    const { value } = e.target;
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    this.setState({
      currentTime: value,
    });
    audio.currentTime = value;
    if (value === audio.duration) {
      this.setState({
        isPlay: false,
      });
    }
  };

  // 当前播放位置改变时执行
  onTimeUpdate = () => {
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);

    this.setState({
      currentTime: audio.currentTime,
    });
    if (audio.currentTime === audio.duration) {
      this.setState({
        isPlay: false,
      });
    }
  };

  changeVolume = (e) => {
    const { value } = e.target;
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    audio.volume = value / 100;

    this.setState({
      volume: value,
      isMuted: !value,
    });
  };

  // 倍速播放
  changePlayRate = (num) => {
    this.audioDom.playbackRate = num;
    this.setState({
      playRate: num,
    });
  };

  render() {
    const { src, id } = this.props;

    const {
      isPlay,
      isMuted,
      volume,
      allTime,
      currentTime,
      rateList,
      playRate,
    } = this.state;

    return (
      <div>
        <audio
          id={`audio${id}`}
          src={src}
          ref={(audio) => {
            this.audioDom = audio;
          }}
          preload={"auto"}
          onCanPlay={this.onCanPlay}
          onTimeUpdate={this.onTimeUpdate}
        >
          <track src={src} kind="captions" />
        </audio>

        {isPlay ? (
          <div onClick={this.pauseAudio}>暂停</div>
        ) : (
          <div onClick={this.playAudio}>播放</div>
        )}

        <div>
          <span>
            {this.formatSecond(currentTime) + "/" + this.formatSecond(allTime)}
          </span>
          <input
            type="range"
            step="0.01"
            max={allTime}
            value={currentTime}
            onChange={this.changeTime}
          />
        </div>

        <div onClick={this.onMuteAudio}>静音</div>

        <div>
          <span>音量调节：</span>
          <input
            type="range"
            onChange={this.changeVolume}
            value={isMuted ? 0 : volume}
          />
        </div>

        <div>
          <span>倍速播放：</span>
          {rateList &&
            rateList.length > 0 &&
            rateList.map((item) => (
              <button
                key={item}
                style={
                  playRate === item
                    ? {
                        border: "1px solid #188eff",
                        color: "#188eff",
                      }
                    : null
                }
                onClick={() => this.changePlayRate(item)}
              >
                {item}
              </button>
            ))}
        </div>
      </div>
    );
  }
}

export default AutoPlay;
