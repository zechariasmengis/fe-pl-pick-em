import React, { useState } from 'react';
import '../css/CurrentGSCard.css'

function CurrentGSCard() {

    return(
        <div className="current-gs-card-body">
            <h1>Current Goal Scorer Pick</h1>
            <p>Display current goal scorer pick</p>
            <div className="cgsc-button-wrap"></div>
            <button className="cgsc-button">Make/EditPick</button>
        </div>
    )
}

export default CurrentGSCard;