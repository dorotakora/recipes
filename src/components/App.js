import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ForecastResult from './ForecastResult';
import './App.css';

const APIKey = '9161a3616ae201c026ff6383e35a0198';

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
   // conditionIcon: '',
    //conditionText: '',
    //forecastArray: ''
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  };

    handleSubmit = e => {
        e.preventDefault();
        let API;
        if (window.location.protocol === 'http:') {

          API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&APPID=${APIKey}`; 
        } else {

          API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&APPID=${APIKey}`; 
        }
        //const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&APPID=${APIKey}`; 

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error("Wystąpił błąd")
            })
            .then(response => response.json())
            .then(data => {
              console.log(data)
                this.setState(prevState => ({
                 
                    err: false,
                    date: data.sys.sunrise,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    city: prevState.value,
                    //conditionIcon: data.current.weather_icons,
                    //conditionText: data.current.weather_descriptions,
                    // forecastArray: data.forecast.forecastday,
                    value: ''
                }))

            })
            .catch(err => {
                console.log(err);
                this.setState(prevState => ({
                    err: true,
                    city: prevState.value
                }))
            })
    };

  render() {
    return <div className="container">
            <SearchForm value={this.state.value}
                        change={this.handleInputChange}
                        submit={this.handleSubmit}/>
             <ForecastResult forecast={this.state} />
          </div>
  }
}

export default App;
