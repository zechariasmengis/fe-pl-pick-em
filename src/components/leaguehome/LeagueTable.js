import React, { useState } from 'react';
import '../css/LeagueTable.css'

function LeagueTable() {

    return(
        <div className="lg-table-wrap">
            <table className="lg-table">
                <tr>
                    <th>Team</th>
                    <th>Points</th>
                    <th>PPP</th>
                    <th>Picks Remaining</th>
                </tr>
                <tr>
                    <td>Isaac</td>
                    <td>999</td>
                    <td>3</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Henry</td>
                    <td>999</td>
                    <td>3</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Noah</td>
                    <td>999</td>
                    <td>3</td>
                    <td>100</td>
                </tr>
            </table>
        </div>
    )
}

export default LeagueTable;