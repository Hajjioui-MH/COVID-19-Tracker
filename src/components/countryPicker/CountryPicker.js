import React,{ useState, useEffect } from 'react';
import {fetchCountriesNames} from '../../api' //return an array

const CountryPicker = ({ countryChange })=>{

	const [countries, setCountries] = useState([]);
	useEffect( ()=>{
		const fetch_api = async ()=>{
			const initialData = await fetchCountriesNames();
			setCountries(initialData);
		}
		fetch_api();
	},[])

	if (countries[0]) {
		return(
			<div className='tc'>
				<select 
				id="countries" 
				className="w-100 ph5 db h2 f6 bg-near-white ba b--sliver gray" 
				name=""
				onChange={(e)=>countryChange(e.target.value)}
				>
					<option value="" >Global</option>
					{
						countries.map( (country,i) => <option key={i} value={country} >{country}</option> )
					}
					  
				</select>
			</div>
		)
	}
	else{
		return <h1>...</h1>
	}
}
export default CountryPicker;