import React, { useState } from 'react';
import '../css/CurrentPickCard.css'

function CurrentPickCard() {

    return(
        <div className="current-pick-card-body">
            <h1>Current Week</h1>
            <p>Display something here relating to picks</p>
            <div className="cpc-button-wrap"></div>
            <button className="cpc-button">Make/EditPicks</button>
        </div>
    )
}

export default CurrentPickCard;