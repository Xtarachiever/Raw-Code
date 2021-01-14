import React, { useState,useEffect } from 'react';

function Each({genders,getGender,setGender}){
    const [gender,setGenders]=useState(setGender);
    const getGenders=(e)=>{
        setGender(e.target.value)
    }
    return(
        <nav className="change">
            <input type="checkbox" id={genders} name={genders} value={genders} />
            <label htmlFor={genders}>{getGenders}</label>
        </nav>
    )
}
export default Each;