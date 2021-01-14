import React from 'react';

function User({states,getGender}){
    const state=states.map(state=>state.gender)
    const uniques=Array.from(new Set(state)).sort();
    return(
        <div className="users">
            <nav>
                <div>
                    <input type="checkbox" value="All" onChange={getGender} key='All' id="All"/>
                    <label htmlFor="All"><i className='fa fa-users'></i>All Users</label>
                </div>
            {
                uniques.map(eachUser=>(
                    <div>
                        <input type="checkbox" onChange={getGender} value={eachUser} key={eachUser} id={eachUser}/>
                        <label htmlFor={eachUser}><i className={`fa fa-${eachUser}`}></i>{eachUser} Users</label>
                    </div>
                ))
            }
            </nav>
        </div>
    );
}
export default User;