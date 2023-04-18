import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createStore} from "@reduxjs/toolkit";
import Countereducer from "./reducer/Countereducer.jsx";
import {Provider} from "react-redux";

//STORE
//ACTIONS
//REDUCER
//DISPATCH
const store = createStore(Countereducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
