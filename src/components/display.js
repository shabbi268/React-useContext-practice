import React, { useContext } from 'react';
import {MyContext} from '../../pages/index';


export default function DisplayComponent() {
    const {input} = useContext(MyContext);
    return (
        <div style={{padding: `25px`}}>
            <h2>Display Component</h2>
            <br></br>
            <label>Text Value: </label>
            <br></br>
            <div>{input.textValue}</div>
        </div>
    );
}