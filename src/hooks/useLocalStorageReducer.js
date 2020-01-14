import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultVal, reducer) {
  // make piece of state based on a value from localStorage , or default
  const [ state, dispatch ] = useReducer(reducer, defaultVal, () => { // function inisde useState gonna set the initial value 
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal) );
    } catch(e) {
      val = defaultVal;
    }
    return val; // set initialVal to val
  });
  // use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [ state, dispatch ];
};

export default useLocalStorageReducer;