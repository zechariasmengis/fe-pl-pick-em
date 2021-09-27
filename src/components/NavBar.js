import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav'

function NavBar() {

    return(
        <Nav>
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">Join League</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">Create League</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">Logout</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar;