import React from 'react';
import Parallax from './Parallax';
import '../css/HomePage.css'
import NavigateTool from './NavigateTool';

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