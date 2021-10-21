import React, { useState } from 'react';
import LeagueTable from './LeagueTable';
import CurrentGSCard from './CurrentGSCard';
import CurrentPickCard from './CurrentPickCard';
import '../../css/LeagueHome.css';

function LeagueHome() {

    return(
        <div className="lg-hp-body">
            <div className="lg-hp-cards-wrap">
                < CurrentPickCard />
                < CurrentGSCard />
            </div>
            < LeagueTable />
        </div>
    )
}

export default LeagueHome;