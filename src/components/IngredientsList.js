import React, { Component } from 'react';
import './IngredientsList.css';
import uuid from 'react-uuid';

class IngredientsList extends Component {

render(){
  return (
  <div className="ingredients-list">
      {this.props.recipes.map(item => (
        <div className="ingredients-item" key={uuid()}>
          <div className="ingredient-link">
            <a href={item.href} alt={item.title} target="blank">{item.title}</a>
          </div>
          <div className="ingredient-properties">
              <div className="ingredient-img"><img src={item.thumbnail} alt={item.title}></img></div>
              <div className={'ingredient-tags'}>
              {item.ingredients.split(',').map((item, index) => (<span key={index} >{item}</span>))}
              </div>
          </div>
        </div>
      ))}
  </div>
);
}

};

export default IngredientsList;

