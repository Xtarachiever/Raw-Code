import React,{useEffect,useState} from 'react';
import './App.css';
import User from './User';

const HomeTwo=()=>{
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
        fetchDatas();
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
    const filterSearch=states.filter((state)=>((state.name.first.toLowerCase()).includes(search.toLowerCase())||(state.gender.toLowerCase().includes(search.toLowerCase()))))

    //setSearch values
    const getSearch=(e)=>{
        setSearch(e.target.value);
        setCountry(filterSearch);
    }
    const getGender=(e)=>{
        setGender(e.target.value);
    }

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
                <div className="user-gender">
                    <User states={states} getGender={getGender}/>
                </div>
            </div>
        </div>
    )
};
export default HomeTwo;