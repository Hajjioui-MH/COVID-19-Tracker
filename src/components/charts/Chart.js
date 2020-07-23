import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api' ;

const Chart = ({ country })=>{
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

	return(
		<div className='w-60 center pa3'>
			{lineChart}
		</div>
	)
}
export default Chart;