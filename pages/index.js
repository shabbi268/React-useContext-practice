import { useReducer } from 'react';
import React from 'react';
import InputComponent from '../src/components/input';
import DisplayComponent from '../src/components/display';

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
    <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
      <div>This is HOMEPAGE Component</div>
      <br></br>
      <InputComponent></InputComponent>
      <br></br>
      <br></br>
      <DisplayComponent></DisplayComponent>
    </div>
      
    </MyContext.Provider>
  )
}
