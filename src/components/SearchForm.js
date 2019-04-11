import React from 'react';
import './SearchForm.css';

const SearchForm = props => {
  return <form onSubmit={props.submit} className="searchCity" >
      <label>Pogoda dla:</label>
      <input
            type="text"
            value={props.value}
            onChange={props.change}
            placeholder="Wpisz miasto"
          />
         </form>
};

export default SearchForm


