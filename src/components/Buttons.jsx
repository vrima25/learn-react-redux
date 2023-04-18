import React from "react";
import {useDispatch} from "react-redux";
import {decrement, increment} from "../actions/CounterActions.jsx";

function Buttons(){
    const dispatch = useDispatch()
    return (
        <div>
            <button type="" onClick={() => dispatch(increment())}>+</button>
            <button type="" onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Buttons