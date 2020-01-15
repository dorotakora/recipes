import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ForecastResult from './ForecastResult';
import './App.css';

const APIKey = '837e046bf31e5cb351b5bf6ed80e01b6';

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
    conditionIcon: '',
    conditionText: '',
    //forecastArray: ''
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  };

    handleSubmit = e => {
        e.preventDefault();
        const API = `http://api.weatherstack.com/current?access_key=${APIKey}&query=${this.state.value}`; //&days=7

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error("Wystąpił błąd")
            })
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => ({
                    err: false,
                    date: data.location.localtime,
                    temp: data.current.temperature,
                    pressure: data.current.pressure,
                    wind: data.current.wind_speed,
                    city: prevState.value,
                    conditionIcon: data.current.weather_icons,
                    conditionText: data.current.weather_descriptions,
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
