import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Parallax from './Parallax';
import NavigateTool from './NavigateTool';
import MusicPage from './MusicPage'
import '../css/HomePage.css'

class HomePage extends React.Component {
    render() {
        return(
            <div class="Start" style = {{height:"100%"}}>
                <NavigateTool/>
                <Router>
                    <switch>
                        <Route exact path="/" component={Parallax}/>
                        <Route path="/music" component={MusicPage}/>
                    </switch>
                </Router>
            </div>
        )
    }
}

export default HomePage;