import React, { useContext } from 'react';
import {MyContext} from '../../pages/index';


export default function DisplayComponent() {
    const {input} = useContext(MyContext);
    return (
        <div>
            <h2>This is DISPLAY Component</h2>
            <br></br>
            <label>Text Value: </label>
            <div>{input.textValue}</div>
        </div>
    );
}