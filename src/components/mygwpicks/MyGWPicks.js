import React, { useState } from 'react';
import PRGrid from './elements/PRGrid';
import PicksMadeSB from './elements/PicksMadeSB';
import MatchupList from './elements/MatchupList';
import AdSB from '../global/AdSB';
import '../../css/MyGWPicks.css'

function MyGWPicks() {

    return(
        <div className="my-gw-picks-body">
            < PRGrid />
            <div className="my-gw-picks-lower">
                <PicksMadeSB />
                <MatchupList />
                <AdSB />
            </div>
        </div>
    )
}

export default MyGWPicks;