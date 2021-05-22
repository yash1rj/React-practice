import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';

import useHttp from '../../hooks/http';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not reach here!');
  }
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);

  const { isLoading, data, error, sendRequest, extraReq, reqIdentifier, clear } = useHttp();

  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

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
    if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({
        type: 'DELETE',
        id: extraReq
      });
    }
    else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({
        type: 'ADD',
        ingredient: { id: data.name, ...extraReq }
      });
    }

  }, [data, extraReq, reqIdentifier, isLoading, error]);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    // setUserIngredients(filteredIngredients);
    dispatch({
      type: 'SET',
      ingredients: filteredIngredients
    });
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    sendRequest(
      'https://react-hooks-basketapp-default-rtdb.firebaseio.com/ingredients.json',
      'POST',
      JSON.stringify(ingredient),
      ingredient,
      'ADD_INGREDIENT'
    );
    // setIsLoading(true);
    // dispatchHttp({
    //   type: 'SEND'
    // });
    // fetch('https://react-hooks-basketapp-default-rtdb.firebaseio.com/ingredients.json', {
    //   method: 'POST',
    //   body: JSON.stringify(ingredient),
    //   headers: { 'Content-Type': 'application/json' }
    // }).then(response => {
    //   // setIsLoading(false);
    //   dispatchHttp({
    //     type: 'RESPONSE'
    //   });
    //   return response.json();
    // }).then(responseData => {
    //   // setUserIngredients(prevUserIngredients => [
    //   //   ...prevUserIngredients,
    //   //   { id: responseData.name, ...ingredient }
    //   // ]);
    //   dispatch({
    //     type: 'ADD',
    //     ingredient: { id: responseData.name, ...ingredient }
    //   });
    // });
  }, [sendRequest]);

  const removeIngredientHandler = useCallback(id => {
    sendRequest(
      `https://react-hooks-basketapp-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      'DELETE',
      null,
      id,
      'REMOVE_INGREDIENT'
    );
  }, [sendRequest]);

  // const clearError = useCallback(() => {
  //   // setError(null);
  //   // dispatchHttp({
  //   //   type: 'CLEAR_ERROR'
  //   // });
  //   clear();
  // }, []);

  const igList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler} />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <IngredientForm onAddIngredients={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {igList}
      </section>
    </div>
  );
}

export default Ingredients;
