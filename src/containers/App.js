import React,{ Component } from 'react';
import {Cards, CountryPicker, Chart} from '../components'
import {fetchCardData} from '../api' //return an object
import covidImg from '../images/coronaImg.png';
import './App.css';

class App extends Component {
  state = {
    country : '',
    data : {} ,
  }

  async componentDidMount(){
    const initial_Card_Data = await fetchCardData();
    this.setState({data : initial_Card_Data})
  }
  handleCountryChange = async (clickedCountry)=>{
    const Country_Data = await fetchCardData(clickedCountry);
    this.setState({ data : Country_Data, country : clickedCountry })
  }
  render(){
    const {  data, country } = this.state;
    return (
      <div className="App">
        <img className='coronaImg mt3' src={covidImg} alt='COVID-19' />
        <Cards data={data} />
        <CountryPicker countryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }

}

export default App;
