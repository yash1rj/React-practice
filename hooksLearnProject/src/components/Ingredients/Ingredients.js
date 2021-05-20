import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [useringredients, setUserIngredients] = useState([]);

  const addIngredientHandler = ingredient => {
    fetch('https://react-hooks-basketapp-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevUserIngredients => [
        ...prevUserIngredients,
        { id: responseData.name, ...ingredient }
      ]);
    });
  };

  const removeIngredientHandler = id => {
    setUserIngredients(prevUserIngredients => {
      return prevUserIngredients.filter(ing => {
        return ing.id !== id
      });
    });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredients={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={useringredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
