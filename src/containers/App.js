import React,{ Component } from 'react';
import {Cards, CountryPicker} from '../components'
import './App.css';

class App extends Component {
  state = {
    country : '',
  }
  handleCountryChange = (value)=>{
    console.log(value);
  }
  render(){
      return (
        <div className="App">
          <Cards />
          <CountryPicker countryChange={this.handleCountryChange} />
        </div>
      );
  }

}

export default App;
