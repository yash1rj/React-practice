import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [useringredients, setUserIngredients] = useState([]);

  const addIngredientHandler = ingredient => {
    setUserIngredients(prevUserIngredients => [
      ...prevUserIngredients,
      { id: Math.random().toString(), ...ingredient }
    ]);
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
