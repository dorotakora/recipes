import React, { Component } from 'react';
import SearchForm from './SearchForm';
import './App.css';

class App extends Component {

  state = {
    value: '',
    recipes: [],
    err: false
  };

  handleInputChange = e => {
    let oldValue = this.state.value;
    let newValue = e.target.value ? `${e.target.value}` : oldValue + ` ${e.target.innerHTML}`;
    this.setState({
        value: newValue
    })
  }; 



    handleSubmit = e => {
        e.preventDefault();
        let value = this.state.value.replace(/ /g, ",").replace(/^,|,$/g,'');
    
        const API = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${value}&p=10`
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error("Wystąpił błąd")
            })
            .then(response => response.json())
            .then(data => {
              
                this.setState(state => {
                  let recipes = data.results;
                    return {
                      recipes
                    }
                })  
            })
            .catch(err => {
                console.log(err);
                this.setState(prevState => ({
                    err: true
                }))
            });
    };

     


  render() {
    return <div className="container">
            <SearchForm value={this.state.value}
                        change={this.handleInputChange}
                        submit={this.handleSubmit}
                        recipes={this.state.recipes}/>
          </div>
  }
}

export default App;
