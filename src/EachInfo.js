import React from 'react';

function EachInfo({name,picture,street,city,country,email,phone,date}){
    const dates=new Date(date);
    const year=dates.getFullYear();
    var month=dates.getMonth();
    var day=dates.getDay();
    if (month < 10) {
         (month = '0' + month);
      }
      if (day < 10) {
        (day = '0' + day);
    }
    return(
        <div className="each-detail">
            <img src={picture} alt={name}/>
            <div className="information">
                <p>{name}</p>
                <p>{street},{city},{country}</p>
                <p><i className="fa fa-envelope"></i>{email}</p>
                <p><i className="fa fa-phone"></i>{phone}</p>
                <p>Joined:  {`${year}-${month}-${day}`}</p>
            </div>
        </div>
    );
}
export default EachInfo;