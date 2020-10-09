import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Parallax from './Parallax';
import NavigateTool from './NavigateTool';
import MusicPage from './MusicPage'
import '../css/HomePage.css'

class HomePage extends React.Component {
    render() {
        return(
            <div className="Start" style = {{height:"100%"}}>
                <NavigateTool/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Parallax}/>
                        <Route path="/music" component={MusicPage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default HomePage;