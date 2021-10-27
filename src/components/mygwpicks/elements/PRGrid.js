import React, { useState } from 'react';
import PRSquare from './PRSquare';
import '../../../css/PRGrid.css'

function PRGrid() {

    return(
        <div className="pr-grid-body">
            {/* will need to be managed with media queries */}
            <PRSquare />
            <PRSquare />
            <PRSquare />
            <PRSquare />
            <PRSquare />
            <PRSquare />
            <PRSquare />
            <PRSquare />
            <PRSquare />
            <PRSquare />
        </div>
    )
}

export default PRGrid;