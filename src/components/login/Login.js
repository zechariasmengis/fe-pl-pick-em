import React, { useState } from 'react';
import '../../css/CurrentGSCard.css'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: {username, password}})
        })
        .then(response => response.json())
        .then(result => {
            if (result.error) {
                console.error(result.error);
            } else {
                localStorage.setItem('token', result.token);
                props.handleLogin();
                props.history.push('/');
            }
        })
    }


    return(
        <div className="login-body">
            <form method="post" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="signup-input" type="text" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                <label>Password</label>
                <input className="signup-input" type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <div className="button-wrapper">
                    <input className="signup-submit" type="submit" name="submit" value="Create Account"/>
                </div>
            </form>
        </div>
    )
}

export default Login;