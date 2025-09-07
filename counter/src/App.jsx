import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(5)

  // let Counter = 15

  const addValue = () =>{
    if (Counter >=20) {
        // Counter = Counter+1
      setCounter(20)
    }else{
      setCounter(Counter+1)
    }
    // console.log("value added",Counter);
  }

  const removevalue =()=> {
    if (Counter <=0){
      setCounter(0)
    }else{
      setCounter(Counter-1)
    }
    
    
    // console.log("value remove  ",Counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {Counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
