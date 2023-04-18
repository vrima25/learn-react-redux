import { useState } from 'react'
import './App.css'
import Buttons from "./components/Buttons.jsx";
import Counter from "./components/Counter.jsx"

function App() {
  return (
    <div className="App">
      <Counter />
      <Buttons/>
    </div>
  )
}

export default App
