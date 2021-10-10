import React, { useState } from 'react';
import NavBar from '../NavBar'
import AdSB from '../AdSB'
import FeatureStory from '../FeatureStory';
import MyLeaguesSB from '../MyLeaguesSB';

function Home(props) {

    return(
        <div className="hp-body">
            < MyLeaguesSB />
            < FeatureStory />
            < AdSB />
        </div>
    )
}

export default Home;