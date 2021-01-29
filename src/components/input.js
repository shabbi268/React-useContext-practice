import React, { useContext } from 'react';
import {MyContext} from '../../pages/index';
import {Button, Input} from '@material-ui/core';

export default function InputComponent() {
    const { dispatch } = useContext(MyContext);

    return(
        <div>
            <p>This is INPUT COMPONENT</p>
            <br></br>
            <label>Input: </label>
            <Input type="text" onChange={(e) => {
                let text = e.target.value;
                dispatch({ type: `EDIT`, textValue: text})
            }}></Input>
            <br></br>
            <Button variant="contained" color="primary" onClick={() => dispatch({ type: `RESET`, textValue: `` })}>Reset</Button>
        </div>
    )
}