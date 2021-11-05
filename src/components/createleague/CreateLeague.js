import React, { useState } from 'react';
import '../../css/CreateLeague.css'

function CreateLeague() {

    return(
        <div className="create-league-body">
            <form>
                <label for="">League Name</label><br/>
                <input type="text" placeholder="League Name" /><br/>
                <label for="">Competition</label><br/>
                <select>
                    <option>Premier League</option>
                    <option>La Liga</option>
                    <option>Bundesliga</option>
                </select><br/>
                <div>
                    <label for="">Min Players</label>
                    <select>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div>
                    <label for="">Max Players</label>
                    <select>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                    </select>
                </div>
                <label for="">Team Name</label>
                <input type="text" placeholder="Team Name" />
                <input type="submit" value="Create League"/>
            </form>
        </div>
    )
}

export default CreateLeague;