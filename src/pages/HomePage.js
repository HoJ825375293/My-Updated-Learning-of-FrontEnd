import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Parallax from './Parallax';
import NavigateTool from './NavigateTool';
import '../css/HomePage.css'

class HomePage extends React.Component {
    render() {
        return(
            <div class="Start" style = {{height:"100%"}}>
                <NavigateTool/>
                <Parallax/>
            </div>
        )
    }
}

export default HomePage;