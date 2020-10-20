import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Parallax from './Parallax';
import NavigateTool from './NavigateTool';
import MusicPage from './MusicPage'
import LoginPage from './LoginPage'
import VedioPage from './VedioPage'
import BlogPage from './BlogPage'

class HomePage extends React.Component {
    render() {
        return(
            <div className="Start" style = {{height:"100%"}}>
                <NavigateTool/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Parallax}/>
                        <Route path="/music" component={MusicPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/vedio" component={VedioPage}/>
                        <Route path="/blog" component={BlogPage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default HomePage;