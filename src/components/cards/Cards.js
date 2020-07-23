import React from 'react';
import Card from './Card';

const Cards = ({ data:{confirmed,deaths,recovered,lastUpdate} })=>{

	if (confirmed) {
		return(
			<div className='container'>
				<Card title={'Infected'} value={confirmed} color={'blue'} date={new Date(lastUpdate).toDateString()} description={'Number of infected caused by COVID-19.'} />
				<Card title={'Recovered'} value={recovered} color={'green'} date={new Date(lastUpdate).toDateString()} description={'Number of recoveries from COVID-19.'} />
				<Card title={'Deaths'} value={deaths} color={'red'} date={new Date(lastUpdate).toDateString()} description={'Number of deaths caused by COVID-19.'} />
			</div>
		 )	
	}else{
		return <h1 className='center'>LOADING...</h1>
	}	
}
export default Cards;