import React, { useState } from 'react';
import '../../../css/reset.css';
import '../../../css/PRSquare.css'

function PRSquare() {

    return(
        <div className="pr-square-body">
            <p className="pr-club-dis">ARS</p>
            <p className="pr-picks-remaining-dis">6</p>
            <div className="pr-square-bottom">
                <div className="pr-picks-against-dis">2</div>
                <div className="pr-picks-away-dis">2</div>
            </div>
        </div>
    )
}

export default PRSquare;