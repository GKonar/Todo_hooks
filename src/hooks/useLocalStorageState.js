import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultVal) {
  // make piece of state based on a value from localStorage , or default
  const [ state, setState ] = useState(() => { // function inisde useState gonna set the initial value 
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

  return [ state, setState ];
};

export default useLocalStorageState;