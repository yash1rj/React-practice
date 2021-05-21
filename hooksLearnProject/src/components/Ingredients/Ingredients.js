import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';

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

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null };
    case 'RESPONSE':
      return { ...currentHttpState, loading: false };
    case 'ERROR':
      return { loading: false, error: action.errData };
    case 'CLEAR_ERROR':
      return { ...currentHttpState, error: null };
    default:
      throw new Error('Should not reach here!');
  }
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });
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
    console.log('2RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    // setUserIngredients(filteredIngredients);
    dispatch({
      type: 'SET',
      ingredients: filteredIngredients
    });
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    // setIsLoading(true);
    dispatchHttp({
      type: 'SEND'
    });
    fetch('https://react-hooks-basketapp-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      // setIsLoading(false);
      dispatchHttp({
        type: 'RESPONSE'
      });
      return response.json();
    }).then(responseData => {
      // setUserIngredients(prevUserIngredients => [
      //   ...prevUserIngredients,
      //   { id: responseData.name, ...ingredient }
      // ]);
      dispatch({
        type: 'ADD',
        ingredient: { id: responseData.name, ...ingredient }
      });
    });
  }, []);

  const removeIngredientHandler = useCallback(id => {
    // setIsLoading(true);
    dispatchHttp({
      type: 'SEND'
    });
    fetch(`https://react-hooks-basketapp-default-rtdb.firebaseio.com/ingredients/${id}.json`, {
      method: 'DELETE'
    }).then(response => {
      // setIsLoading(false);
      dispatchHttp({
        type: 'RESPONSE'
      });
      // setUserIngredients(prevUserIngredients => {
      //   return prevUserIngredients.filter(ing => {
      //     return ing.id !== id
      //   });
      // });
      dispatch({
        type: 'DELETE',
        id: id
      });
    }).catch(err => {
      // setError("Something went wrong!!");
      // setIsLoading(false);
      dispatchHttp({
        type: 'ERROR',
        errData: "Something went wrong!!"
      });
    });
  }, []);

  const clearError = useCallback(() => {
    // setError(null);
    dispatchHttp({
      type: 'CLEAR_ERROR'
    });
  }, []);

  const igList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler} />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}

      <IngredientForm onAddIngredients={addIngredientHandler} loading={httpState.loading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {igList}
      </section>
    </div>
  );
}

export default Ingredients;
