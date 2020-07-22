import React from 'react';

const CountryPicker = ({ countryChange })=>{
	return(
		<div>
			<select 
			id="countries" 
			className="w-100 ph6 db h2 f6 bg-near-white ba b--sliver gray" 
			name="">
			onChange={(e)=>countryChange(e.target.value)}
			<option value="walo" >Global</option>
			<option value="Morocco" >Morocco</option>
				  
			</select>
		</div>
	)
}
export default CountryPicker;