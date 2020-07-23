import React,{ Component } from 'react';
import {Cards, CountryPicker, Chart} from '../components'
import './App.css';

class App extends Component {
  state = {
    country : '',
  }
  handleCountryChange = (clickedCountry)=>{
    this.setState({ country : clickedCountry })
  }
  render(){
    const { country } = this.state;
    return (
      <div className="App">
        <Cards country={country} />
        <CountryPicker countryChange={this.handleCountryChange} />
        <Chart country={country} />
      </div>
    );
  }

}

export default App;
