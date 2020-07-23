import axios from 'axios';
const URL ='https://covid19.mathdro.id/api';

export const fetchCardData = async (country)=>{
	try{
		let changeable_URL = URL;
		if(country)
			changeable_URL = `${URL}/countries/${country}`

		const {data : {confirmed, deaths, recovered, lastUpdate} } = await axios.get(changeable_URL);
		const modifiedData = {
			confirmed : confirmed.value,
			deaths : deaths.value,
			recovered : recovered.value,
			lastUpdate : lastUpdate
		}
		return modifiedData;
	}catch(error){
		console.log('unable to get cad data',error)
	}	
}

export const fetchCountriesNames = async ()=>{
	try{
		const { data : {countries} } = await axios.get(`${URL}/countries`);
		const CountriesNames = countries.map(country=>country.name);
		return CountriesNames;

	}catch(error){
		console.log('unable to get countries names',error)
	}
}

export const fetchDailyData = async ()=>{
	try{

		const { data } = await axios.get(`${URL}/daily`) //return an array
		const daysData = data.map(dailyData=>({
			confirmed : dailyData.confirmed.total,
			deaths : dailyData.deaths.total,
			date : dailyData.reportDate
		}));
		return daysData;

	}catch(error){
		console.log('unable to get daily data',error)
	}
}