import React from 'react';
import './SearchForm.css';

const SearchForm = props => {
    return <div>
            <h3>Simple weather app utilizing weather API (http://api.apixu.com)</h3>
            <form onSubmit={props.submit}  className="searchCity" >
                <label>Pogoda dla:</label>
                <input
                    type="text"
                    value={props.value}
                    onChange={props.change}
                    placeholder="Wpisz miasto"
                />
                <button type={'submit'}>Sprawdź</button>
            </form>
        </div>
};

export default SearchForm


