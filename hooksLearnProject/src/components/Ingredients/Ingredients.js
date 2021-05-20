import React, { useEffect, useState, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  // we are already loading ingredients in our Search component
  // useEffect(() => {
  //   fetch('https://react-hooks-basketapp-default-rtdb.firebaseio.com/ingredients.json')
  //     .then(response => response.json())
  //     .then(responseData => {
  //       const loadedIngredients = [];
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount
  //         });
  //       }
  //       console.log('1RENDERING INGREDIENTS');
  //       setUserIngredients(loadedIngredients);
  //     });
  // }, []);

  useEffect(() => {
    console.log('2RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients);
  }, []);

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
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
