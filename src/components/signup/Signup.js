import React, { useState } from 'react';

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: {email, username, password, firstName, lastName}})
        })
        .then(response => response.json())
        .then(result => console.log(result))
    }

    return(
        <div className="signup-body">
            <form method="post">
                <label>Username</label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                <label>First Name</label>
                <input type="text" name="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
                <label>Last Name</label>
                <input type="text" name="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)}></input>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <input type="submit" value="Create Account"/>
            </form>
        </div>
    )
}

export default Signup;