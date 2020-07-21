import React from 'react';
import CountUp from 'react-countup';

const Card = ({title,value,color,date,description})=>{
	return(
		<article className={`w4-m w5-ns hidden bb shadow-5 br3 b--${color} bw3 mv4 mh2`}>
				<h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Infected</h1>
			  <div className="pa3 bt b--black-10">
			    <p className="f5 f3-ns lh-copy mv0 pv1">
			    	<CountUp  start={0} end={value} duration={2.5} separator="," />
			    </p>
			    <p className="f6 f5-ns lh-copy mv0 o-70">{date}</p>
			    <p className="f6 f6-ns lh-copy mv0">{description}</p>
			  </div>				
		</article>		
	)
}
export default Card;