import React, { useState } from 'react';
import '../../css/MyLeaguesSB.css'

function MyLeaguesSB() {

    return(
        <div className="myl-SB">
            <h2>Your Leagues</h2>
            <div className="myl-league-card">
                <h4>League Name</h4>
                <p>Team Name</p>
                <p>Position</p>
                <p>etc</p>
            </div>
        </div>
    )
}

export default MyLeaguesSB;