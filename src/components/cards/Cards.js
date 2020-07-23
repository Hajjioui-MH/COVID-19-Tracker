import React,{ useState, useEffect } from 'react';
import Card from './Card';
import {fetchCardData} from '../../api' //return an object

const Cards = ({ country })=>{

	const [data,setData] = useState({});
	useEffect( ()=>{
		const fetch_api = async ()=>{
			const initial_Card_Data = await fetchCardData(country);
			setData(initial_Card_Data);
		}
		fetch_api()
	},[country])

	if (data.confirmed) {
		return(
			<div className='container'>
				<Card title={'Infected'} value={data.confirmed} color={'blue'} date={new Date(data.lastUpdate).toDateString()} description={'Number of infected caused by COVID-19.'} />
				<Card title={'Recovered'} value={data.recovered} color={'green'} date={new Date(data.lastUpdate).toDateString()} description={'Number of recoveries from COVID-19.'} />
				<Card title={'Deaths'} value={data.deaths} color={'red'} date={new Date(data.lastUpdate).toDateString()} description={'Number of deaths caused by COVID-19.'} />
			</div>
		 )	
	}else{
		return <h1 className='center'>LOADING...</h1>
	}	
}
export default Cards;