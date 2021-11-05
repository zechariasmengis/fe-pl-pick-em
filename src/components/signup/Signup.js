import React, { useState } from 'react';

function Signup() {

    return(
        <div className="signup-body">
            <form>
                <label>Username</label>
                <input type="text"></input>
                <label>First Name</label>
                <input type="text"></input>
                <label>Last Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email" id="email" name="email"></input>
                <label>Password</label>
                <input type="password"></input>
                <input type="submit" value="Create Account"/>
            </form>
        </div>
    )
}

export default Signup;