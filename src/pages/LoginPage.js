import React from 'react';
import Content from '../components/login/Content'
import '../css/loginPage.css'

class LoginPage extends React.Component {
    render() {
        return(
            <div className="loginContainer">
                <Content/>
            </div>
        )
    }
}

export default LoginPage;