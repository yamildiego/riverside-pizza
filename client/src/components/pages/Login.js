import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
// import  { Redirect } from 'react-router-dom'

class Login extends Component {
    state = {}

    responseFacebook = (response) => {
        if (!(response.name === undefined || response.name === "")) {
            console.log(response);
            this.props.history.push('/home');
        }
    }

    componentClicked = (response) => {
        console.log(response);
    }

    render() {
        return (
            <div>
                Login
                <FacebookLogin
                    appId="246687073323149"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />,

            </div>

        );
    }
}

export default Login;