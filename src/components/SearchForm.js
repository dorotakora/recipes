import React, { Component } from 'react';
import './SearchForm.css';
import IngredientsList from './IngredientsList';



class SearchForm extends Component {
    state = {
        showIngredients: false,
        searchPhrase: ''
    }

    toggleList = () => {
        this.setState({
            showIngredients:  !this.state.showIngredients
        })
    }

    ingredients = [
        'Garlic',
        'Chicken',
        'Potatoes',
        'Rice',
        'Tomato',
        'Broccoli',
        'Cheddar',
        'Cereal',
        'Beef',
        'Lobster',
        'Salmon',
        'Mushrooms',
        'Onions',
        'Apples',
        'Oranges',
        'Burritos'
    ];

    render() {
        return <div>
                <div className="header">
                   Aplikacja ułatwiająca wyszukiwanie przepisów kulinarnych 
                </div>
                <div className="content">
                    <form onSubmit={this.props.submit}  className="search" >
                        <div className="search-label-container">
                            <label>Wyszukaj składniki:</label>
                        </div>
                        <div className={"input-container"}>  
                            <textarea 
                                className="textarea" rows="5" 
                                type="text"
                                value={this.props.value}
                                onChange={this.props.change}
                                >
                            </textarea>
                            <div className="toggle-list-container">
                                <span className={"toggle-list"} onClick={this.toggleList}>{this.state.showIngredients ? <span>&#x25b2;</span> : <span>&#x25BC;</span> }</span>
                            </div>
                            <div className={this.state.showIngredients ? 'show' : 'hidden'} onMouseLeave={this.toggleList}>
                                {this.ingredients.map((ingredient, index) => {
                                return <div key={index} onClick={this.props.change}>{ingredient}</div>
                                })}
                            </div>
                        </div>
                        <div className="search-button-container">
                            <button type={'submit'}>Wyszukaj</button>
                        </div>
                    </form>
                    {this.props.submit ?  
                        <IngredientsList recipes={this.props.recipes} showIngredients={this.state.showIngredients}
                    /> : <h1 className="text-center">...loading</h1> }
                </div>
                <div className="footer">&copy;2020&nbsp; Dorota Kora</div>
            </div>
    }
};

export default SearchForm