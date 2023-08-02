// function Countrystates(){

// }
//class CountryStates extends React.Component{}

import React ,{useEffect,useState} from 'react';
import httpclient from './apiclient/httpclient';
//step 1 :component
const CountryStates=() =>{
const [countryStates,setCountryStates]=useState([]);
//const [selectedCountry,setSelectedCountry]=useState(" ");
const [states,setStates]=useState([]);

useEffect(() => {
    const fetchCountryStates=async()=>{
      const response=await httpclient.get('http://localhost:9999/countries');
    setCountryStates(response);
    }
    fetchCountryStates()
},[])
const handleChange=(e)=>{
//setSelectedCountry(e.target.value);
countryStates.filter(countryState=>countryState.country===e.target.value)
.map(countryState=>setStates(countryState.states));

}

 return (
    <>
<nav className="navbar navbar-dark bg-primary mb-3">
<div className="container">
<a href="#" className="navbar-brand">Products</a>
</div>
</nav>


<div className="container productsContainer">
<div className="card card-body card-form">
<h1>Country State Info</h1>
<p className="lead">Country States Info</p>
<div className="form-group">
<select id="countries" onChange={handleChange}>
    {
countryStates.map(countryState =>
 <option key={countryState.country} value={countryState.country}>{countryState.country}</option>)
}
</select>
</div>
<div className="form-group">
<select className="states">
{
    states.map(state =>
        <option key={state} value={state}>{state}</option>)
}

</select>
</div>

</div>
</div>

</>
 )
}

export default CountryStates