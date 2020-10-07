import React from 'react';
import '../css/navBar.css'

class NavigateTool extends React.Component {
    render() {
        return(
            <div className="navBar" >
                <a href="#" className="logo">GoldenExp</a>
                <ul className="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#music">Music</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#vedio">Vedio</a></li>
                    <li><a href="#me">Me</a></li>
                </ul>
            </div>
        )
    }
}

export default NavigateTool;