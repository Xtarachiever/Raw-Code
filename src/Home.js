import React,{useEffect,useState} from 'react';
import './App.css';
import Details from './Details';
import Pagination from './Pagination';
import User from './User';

const Home=()=>{
    const [states,setState]=useState([]);
    const [search,setSearch]=useState("");
    const [country,setCountry]=useState([]);
    const [pick,setPicker]=useState([]);
    const [status,setStatus]=useState('Country');
    const [gender,setGender]=useState('All');
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]=useState(3);
    useEffect(()=>{
        fetchDatas();
        getCountries();
        picker();
      },[status,gender]);
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
    const filterSearch=country.filter((state)=>((state.name.first.toLowerCase()).includes(search.toLowerCase())||(state.gender.toLowerCase().includes(search.toLowerCase()))))

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
    }
    //get the countries available
    const countries=states.map(location=>location.location.country)
    const uniqueCountries=Array.from(new Set(countries)).sort();
    const getCountries=()=>{
        setSearch("");
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
    return(
        <div className="contents">
            <div className="contents-one">
                <p className="header">Hello,<span> Emerald</span></p> 
                <p>Welcome to your dashboard, kindly sort through the user base</p>
                <div className="search">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Find a user" value={search} onChange={getSearch}/>
                </div>
                <p className="user-header">Show Users</p>
                <div className="categories">
                    <div className="icons">
                        <div className="icon user">
                            <i className="fa fa-users"></i>
                        </div>
                        <div className="icon female">
                            <i className="fa fa-female"></i>
                        </div>
                        <div className="icon male">
                            <i className="fa fa-male"></i>
                        </div>
                    </div>
                    <div className="user-gender">
                        <User states={states} picker={picker} getGender={getGender}/>
                    </div>
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
                                        return(<option value="Not Set">Not Set</option>)
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
                        <Details name={state.name.first} key={state.name.first} picture={state.picture.medium}
                        street={state.location.street.number} city={state.location.street.name}
                        country={state.location.country} email={state.email} phone={state.cell}/>
                    ))}
                </div>
                <Pagination totalPosts={states.length} postsPerPage={postsPerPage} paginate={paginate}/>
                <User states={states} picker={picker} getGender={getGender}/>
            </div>
        </div>
    )
};
export default Home;