import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ForecastResult from './ForecastResult';
import './App.css';

const APIKey = '1c968dd768e543bcae3163430191004';

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
    forecastArray: ''
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  };

    componentDidUpdate(prevProps, prevState) {

        if (this.state.value.length === 0) return
        if (prevState.value !== this.state.value) {

            const API = `http://api.apixu.com/v1/forecast.json?key=${APIKey}&q=${this.state.value}&days=7`;

            fetch(API)
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    throw Error("Wystąpił błąd")
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    console.log(data.location.localtime_epoch);
                    this.setState(state => ({
                        err: false,
                        date: data.location.localtime,
                        temp: data.current.temp_c,
                        pressure: data.current.pressure_mb,
                        wind: data.current.wind_mph,
                        city: state.value,
                        conditionIcon: data.current.condition.icon,
                        conditionText: data.current.condition.text,
                        forecastArray: data.forecast.forecastday,

                    }))
                })
                .catch(err => {
                    console.log(err);
                    this.setState(prevState => ({
                        err: true,
                        city: prevState.value
                    }))
                })
        }
    }

  render() {
    return <div className="container">
            <SearchForm value={this.state.value}
              change={this.handleInputChange}/>
             <ForecastResult forecast={this.state} />
          </div>
  }
}

export default App;
