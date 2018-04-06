import React, { Component} from 'react';




class Login extends Component {
    onLogin(){
       this.props.onLogin();
    };
    render(){

        return(
            <div>
                <button onClick={this.onLogin.bind(this)}>Login</button>
            </div>

        );
    }

}

export default Login