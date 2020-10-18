import React from 'react';
import "./contentStyle.css"

class Content extends React.Component {
    constructor(props){
        super(props)
        this.state={
            index: false
        }
    }

    handleFormChange = () => {
        let {index} = this.state;
        var box = document.getElementsByClassName('user')[1];
        let temp = box.className
        if(index){
            box.className = temp + " active"
        }else{
            box.className = temp.slice(0, 9)
        }
        this.setState({
            index: !index
        })
    }

    render(){
        return(
            <div className="login">
            <section>
                <div className="loginContainer">
                    <div className="user SIBX">
                        <div className="imgBxSignIn"></div>
                        <div className="formBx">
                            <form>
                                <h2>Sign In</h2>
                                <input type="text" name="" placeholder="UserName"/>
                                <input type="password" name="" placeholder="Password"/>
                                <input type="submit" name="" value="Login"/>
                                <p className="signup">Don't have an account ? 
                                <button type="button" className="link" onClick={this.handleFormChange}>Sign Up</button>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="user SUBX active">
                        <div className="formBx boxSignUp">
                            <form>
                                <h2>Create an Account</h2>
                                <input type="text" name="" placeholder="UserName"/>
                                <input type="email" name="" placeholder="Email Address"/>
                                <input type="password" name="" placeholder="Create Password"/>
                                <input type="password" name="" placeholder="Confirm Password"/>
                                <input type="submit" name="" value="Sign Up"/>
                                <p className="signup">Already have an account ? 
                                <button type="button" className="link" onClick={this.handleFormChange}>Sign In</button>
                                </p>
                            </form>
                        </div>
                        <div className="imgBxSignUp"></div>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}

export default Content;