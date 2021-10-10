import React, { useState } from 'react';
import LeagueTable from '../LeagueTable';
import CurrentGSCard from '../CurrentGSCard';
import CurrentPickCard from '../CurrentPickCard';

function LeagueHome() {

    return(
        <div className="lg-hp-body">
            < CurrentPickCard />
            < CurrentGSCard />
            < LeagueTable />
        </div>
    )
}

export default LeagueHome;