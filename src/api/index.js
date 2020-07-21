import axios from 'axios';
const URL ='https://covid19.mathdro.id/api';

export const fetchCard_GlobalData = async ()=>{
	try{
		const {data : {confirmed, deaths, recovered, lastUpdate} } = await axios.get(URL);
		const modifiedData = {
			confirmed : confirmed.value,
			deaths : deaths.value,
			recovered : recovered.value,
			lastUpdate : lastUpdate
		}
		//console.log(modifiedData)
		return modifiedData;
	}catch(error){
		console.log('unable to get cad data',error)
	}	
}