import React, { useState } from 'react';

function CreateLeague() {

    return(
        <div className="create-league-body">
            <form>
                <label for="">League Name</label>
                <input type="text" placeholder="League Name" />
                <label for="">Competition</label>
                <select>
                    <option>Premier League</option>
                    <option>La Liga</option>
                    <option>Bundesliga</option>
                </select>
                <label for="">Min Players</label>
                <select>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <label for="">Max Players</label>
                <select>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                </select>
                <label for="">Team Name</label>
                <input type="text" placeholder="Team Name" />
                <input type="submit" value="Create League"/>
            </form>
        </div>
    )
}

export default CreateLeague;