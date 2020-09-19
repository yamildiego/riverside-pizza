import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './Login.css';

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
            <div className="App text-center">
                <h1 className="title mt-4 mb-5">Riverside Pizza</h1>
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