import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api' ;

const Chart = ({ data:{confirmed,deaths,recovered}, country })=>{
	const [dailyData, setDailyData] = useState([])
	useEffect( ()=>{
		const fetch_api = async ()=>{
			const initialData = await fetchDailyData(); //return an array
			setDailyData(initialData)
		}
		fetch_api();
	},[])

	const lineChart = (
	    dailyData[0] ? (
	      <Line
	        data={{
	          labels: dailyData.map((data) => data.date),	//return an array
	          datasets: [{
	            data: dailyData.map((data) => data.confirmed),	// return an array
	            label: 'Infected',
	            borderColor: '#3333ff',
	            fill: true,
	          }, {
	            data: dailyData.map((data) => data.deaths),
	            label: 'Deaths',
	            borderColor: 'red',
	            backgroundColor: 'rgba(255, 0, 0, 0.5)',
	            fill: true,
	          },
	          ],
	        }}
	      />
	    ) : null
	);
	const barChart = (
		//console.log(confirmed,deaths,recovered)
		confirmed 
		? (<Bar 
			data={{
				labels : ['Infected','Recovered','Deaths'],
				datasets : [{
					label : 'People',
					backgroundColor : ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
					data : [confirmed, recovered, deaths],
				}]
			}}
			options = {{
				legend : {display : false},
				title : {display : true, text : `Current state in ${country}`}
			}}
			/>)
		: null
	)

	return(
		<div className='w-60 center pa3'>
			{ country ? barChart : lineChart}
		</div>
	)
}
export default Chart;