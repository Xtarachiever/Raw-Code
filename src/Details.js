import React from 'react';
import {Link} from 'react-router-dom';
function Details(props){
    return(
        <div className="details">
            <img src={props.picture} alt={props.picture}/>
            <div className="content">
                <p className="name">{props.name}</p>
                <p>{props.street},{props.city},{props.country}</p>
                <div className="contact">
                    <p className="email">{props.email}</p>
                    <p>{props.phone}</p>
                    <i className="fa fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
};
export default Details;