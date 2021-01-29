import { useReducer } from 'react';
import React from 'react';
import InputComponent from '../src/components/input';
import DisplayComponent from '../src/components/display';
import { Grid } from '@material-ui/core';

export const initialState = {
  textValue: ``
};
export const MyContext = React.createContext({});


export const reducer = (state, action) => { 
  // you'll need to figure out what to put here 
  console.log(`reducer called: `, state, action);
  switch (action.type) {
    case 'EDIT':
      return {textValue: action.textValue, inputValue: state.inputValue };
    case 'RESET':
      return {textValue: ``,  inputValue: state.inputValue };
    default:
      return;
  }
};

export default function Home() {
  const [input, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{
      input,
      dispatch
    }}>
    <h1 style={{
        position: 'absolute', left: '50%', top: '23%',
        transform: 'translate(-50%, -50%)',
        display: `flex`
    }}>Bye Bye Prop Drilling</h1>
    <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        display: `flex`
    }}>
      <h2 style={{ padding: `25px` }}>Home Component</h2>
      <InputComponent></InputComponent>
      <DisplayComponent></DisplayComponent>
    </div>
      
    </MyContext.Provider>
  )
}
