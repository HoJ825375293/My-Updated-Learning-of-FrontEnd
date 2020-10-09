import React from 'react';
import Content from '../components/music/Content'
import '../css/musicPage.css'

class MusicPage extends React.Component {
    render() {
        return(
            <div className="musicContainer">
                <Content/>
            </div>
        )
    }
}

export default MusicPage;