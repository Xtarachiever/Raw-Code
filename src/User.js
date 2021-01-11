import React from 'react';

function User({states,getGender}){
    const state=states.map(state=>state.gender)
    const uniques=Array.from(new Set(state)).sort()
    return(
        <div className="users">
            <nav>
                <input type="checkbox" value="All" onChange={getGender} key='All' id="All"/>
                <label for="All">All Users</label>
            {
                uniques.map(eachUser=>(
                    <div>
                        <input type="checkbox" onChange={getGender} value={eachUser} key={eachUser} id={eachUser}/>
                        <label for={eachUser}>{eachUser} Users</label>
                    </div>
                ))
            }
            </nav>
        </div>
    );
}
export default User;