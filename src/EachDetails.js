import React, { useEffect, useState } from 'react';
import EachInfo from './EachInfo';
import HomeTwo from './HomeTwo';
import Each from './Each';
import { Link } from 'react-router-dom';
function EachDetails({match}){
    const [info,setInfo]=useState([]);
    const [states,setState]=useState([]);
    const [search,setSearch]=useState("");
    const [country,setCountry]=useState([]);
    const [pick,setPicker]=useState([]);
    const [status,setStatus]=useState('Country');
    const [gender,setGender]=useState('All');
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
     }, [])

    useEffect(()=>{
        getEachDetails();
        getCountries();
        fetchDatas();
    },[])

    const getSearch=(e)=>{
        setSearch(e.target.value);
    }
    const getStatus=(e)=>{
        setStatus(e.target.value);
    }

        //get the countries available
        const countries=states.map(location=>location.location.country)
        const uniqueCountries=Array.from(new Set(countries)).sort();
        const getCountries=()=>{
            setSearch("");
            setPicker("");
            switch(status){
                case 'Australia':
                    setCountry(states.filter(state=>state.location.country==='Australia'));
                    break;
                case 'Ireland':
                    setCountry(states.filter(state=>state.location.country==='Ireland'));
                    break;
                case 'Brazil':
                    setCountry(states.filter(state=>state.location.country==='Brazil'));
                    break;
                case 'Canada':
                    setCountry(states.filter(state=>state.location.country==='Canada'));
                    break;
                case 'Finland':
                    setCountry(states.filter(state=>state.location.country==='Finland'));
                    break;
                default:
                    setCountry(states);
                    break;
            }
        }

        const fetchDatas=async ()=>{
            try{
              const response=await fetch('https://randomuser.me/api/?results=20');
              const data=await response.json();
              const datas=data.results;
              setState(datas);
            //   console.log(datas);
            }
            catch{
              alert('Error occured');
            }
        }
    const getEachDetails=async ()=>{
        try{
            const response=await fetch(`https://randomuser.me/api/?results=20/${match.params.name}`);
            const datas=await response.json();
            setInfo(datas.results);
            console.log(datas.results)
        }
          catch{
            alert('Sorry something went wrong')
        }
    };
    return(
        <div className="each-info">
            <HomeTwo/>
            <div className="content-two detailed">
                <div className="filter">
                    <p className="filter">Filter By</p>
                </div>
                <div className="heading">
                    <div className="search">
                        <i className="fa fa-search"></i>
                        <input type="text" value={search} onChange={getSearch} placeholder="Find a user"/>
                    </div>
                    <div className="select">
                        <select onChange={getStatus}>
                            <option value="Country">Country</option>
                            {
                                uniqueCountries.map(unique=>{
                                    if(unique===""){
                                        return(<option value="Not Set" key="Not Set">Not Set</option>)
                                    }
                                    else{
                                        return(<option value={unique} key={unique}>{unique}</option>)
                                    }
                                })
                            }
                        </select>
                    </div>
                </div>
                <Link to="/" className="results">
                    <i className="fa fa-arrow-left"></i>
                    <p>Results</p>
                </Link>
                <div className="eached">
                {
                    info.map(state=>(
                        <EachInfo name={state.name.first} picture={state.picture.large} street={state.location.street.number} city={state.location.street.name}
                        country={state.location.country} email={state.email} phone={state.cell} key={state.email}
                        date={state.registered.date}/>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};
export default EachDetails;