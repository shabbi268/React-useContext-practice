import React, { useContext } from 'react';
import {MyContext} from '../../pages/index';


export default function DisplayComponent() {
    const {input} = useContext(MyContext);
    return (
        <div style={{ paddingTop: `20px` }}>
            <div>This is DISPLAY Component</div>
            <br></br>
            <label>Text Value: </label>
            <div>{input.textValue}</div>
        </div>
    );
}