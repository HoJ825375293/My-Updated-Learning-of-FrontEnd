import React from 'react';
import '../css/parallax.css'

class Parallax extends React.Component {
    render() {
        return(
            <div className="container">
                <div class="b-img1">
                    <div class="text">
                        <span class="bold">
                            关于我
                        </span>
                    </div>
                </div>
                <section class="section section-light">
                    <h2>你好啊</h2>
                    <p>我是一名开发者，你希望了解我吗?</p>
                </section>
                <div class="b-img2">
                    <div class="text">
                        <span class="bold">
                            我喜欢
                        </span>
                    </div>
                </div>
                <section class="section section-dark">
                    <h2>喜爱美丽</h2>
                    <p>我希望将我看到的美丽页面，集合在一起，作为我的开发仓库。</p>
                </section>
                <div class="b-img3">
                    <div class="text">
                        <span class="bold">
                            我期望
                        </span>
                    </div>
                </div>
                <section class="section section-light">
                    <h2>期望丰富</h2>
                    <p>我也希望，将我所喜欢的功能与内容，逐个添加进来，让大家喜欢。</p>
                </section>
            </div>
        )
    }
}

export default Parallax;