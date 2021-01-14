import React,{useEffect,useState,useMemo} from 'react';
import './App.css';
import Details from './Details';
import Each from './Each';
import Pagination from './Pagination';
import {Link} from 'react-router-dom';
import User from './User';
import Downloader from './downloader';

const Home=()=>{
    const [states,setState]=useState([]);
    const [search,setSearch]=useState("");
    const [country,setCountry]=useState([]);
    const [pick,setPicker]=useState([]);
    const [status,setStatus]=useState('Country');
    const [gender,setGender]=useState('All');
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]=useState(3);
    const [isCountry]=useState(true)
    useEffect(()=>{
        fetchDatas();
        getCountries();
        picker();
      },[status,gender]);

    
    // const anotherOne=useMemo(()=>(
    //     pick.slice(indexOfFirstPage,indexOfLastPage)
    //     ),[pick])
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
    const indexOfLastPage=currentPage*postsPerPage;
    const indexOfFirstPage=indexOfLastPage-postsPerPage;
    const currentPosts=country.slice(indexOfFirstPage,indexOfLastPage);
    const currentPick=pick.slice(indexOfFirstPage,indexOfLastPage);
    const filterSearch=states.filter((state)=>((state.name.first.toLowerCase()).includes(search.toLowerCase())||(state.gender.toLowerCase().includes(search.toLowerCase()))))

    //setSearch values
    const getSearch=(e)=>{
        setSearch(e.target.value);
        setCountry(filterSearch);
    }
    const getStatus=(e)=>{
        setStatus(e.target.value);
    }
    const getGender=(e)=>{
        setGender(e.target.value);
        setCountry(currentPick);
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
            case 'France':
                setCountry(states.filter(state=>state.location.country==='France'));
                break;
            case 'Germany':
                setCountry(states.filter(state=>state.location.country==='Germany'));
                break;
            case 'Denmark':
                setCountry(states.filter(state=>state.location.country==='Denmark'));
                break;
            case 'Spain':
                setCountry(states.filter(state=>state.location.country==='Spain'));
                break;
            case 'United Kingdom':
                setCountry(states.filter(state=>state.location.country==='United Kingdom'));
                break;
            case 'Iran':
                setCountry(states.filter(state=>state.location.country==='Iran'));
                break;
            case 'Norway':
                setCountry(states.filter(state=>state.location.country==='Norway'));
                break;
            case 'Netherlands':
                setCountry(states.filter(state=>state.location.country==='Netherlands'));
                break;
            case 'New Zealand':
                setCountry(states.filter(state=>state.location.country==='New Zealand'));
                break;
            case 'Turkey':
                setCountry(states.filter(state=>state.location.country==='Turkey'));
                break;
            case 'United States':
                setCountry(states.filter(state=>state.location.country==='United States'));
                break;
            default:
                setCountry(states);
                break;
        }
    }
    //Change pageNumbers
    const paginate=(pageNumber)=>setCurrentPage(pageNumber);


    //Change Picker
    const picker=()=>{
        switch(gender){
            case 'female':
                setPicker(states.filter(state=>state.gender==='female'));
                break;
            case 'male':
                setPicker(states.filter(state=>state.gender==='male'));
                break;
            default:
                setPicker(states);
                break;
        }
    }
    // const isCountryPicker=isCountry;
    // let isPicker;
    // if(isCountryPicker){
    //     isPicker=currentPosts;
    // }
    // else{
    //     isPicker=currentPick;
    // }
    return(
        <div className="contents" data-testid="home">
            <div className="contents-one">
                <p className="header">Hello,<span> Emerald</span></p> 
                <p>Welcome to your dashboard, kindly sort through the user base</p>
                <div className="search">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Find a user" value={search} onChange={getSearch}/>
                </div>
                <p className="user-header">Show Users</p>
                <div className="user-gender">
                    <User states={states} getGender={getGender}/>
                </div>
            </div>
            <div className="content-two">
                <p className="filter">Filter By</p>
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
                <div className="info">
                        {currentPosts.map(state=>(
                            <Link to={`/${state.name.first}`} style={{textDecoration:'none'}} className="linked">
                            <Details name={state.name.first} key={state.email} picture={state.picture.medium}
                            street={state.location.street.number} city={state.location.street.name}
                            country={state.location.country} email={state.email} phone={state.cell}/>
                            </Link>
                        ))}
                </div>
                <div className="next">
                    <Link to='/:name/downloader'>
                        <button><i className="fa fa-cloud-download"></i>Download Results</button>
                    </Link>
                    <Pagination totalPosts={states.length} postsPerPage={postsPerPage} paginate={paginate}/>
                </div>
            </div>
        </div>
    )
};
export default Home;