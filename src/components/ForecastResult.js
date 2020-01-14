import React from 'react';
import './ForecastResult.css'

const ForecastResult = props => {

const { date, city, conditionIcon, conditionText, temp, pressure, wind, err, /*forecastArray*/ } = props.forecast;

  let content = null;
  //const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
  if (!err && city) {

    content = 
          <div className="forecast_current">
              <div>
                  <p><em>{city.charAt(0).toLocaleUpperCase() + city.substring(1)}</em></p>
                  <p>Data i godzina: {date}</p>
              </div>
              <div>
                  <img src={conditionIcon} alt={conditionText}></img>
              </div>
              <div>
                  <p>Aktualna temperatura: {temp} &#176;C</p>
                  <p>Aktualna siła wiatru: {wind} m/s</p>
                  <p>Aktualne ciśnienie: {pressure} hPa</p>
              </div>
          </div>
        //   <div className="forecast_for7Days">
        //         {forecastArray.map((e,i) => {
        //             return <ul key={e.date_epoch}>
        //                 <li>{days[new Date(e.date).getDay()]}</li>
        //                 <img src={e.day.condition.icon} alt={e.day.condition.text}></img>
        //                 <li>{e.day.avgtemp_c} &#176;C</li>
        //                 </ul>
        //         })}
        //   </div>
      
  }

  return <div className="forecast">
          {err ? `Wpisz prawidłową nazwę miasta ${city}` : content}
        </div>
};

export default ForecastResult;