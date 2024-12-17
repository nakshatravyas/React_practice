import { useState } from "react"

function App() {

  // let counter=15
  const [counter,setCounter]=useState(15)

  const addvalue=()=>{
    setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1) here counter will update by one only 
    // because usestate jo hai vo batches me changes ko karne ko bhjta hai to vo dekhega ki aree same hi kaam hora hai sab me then only do once
    // but what if i have to increment like this so see below
    
    // setCounter((prevCounter)=>prevCounter+1) ab ye jo hai vo previous states lega to prevcounter ki alue access karke update karegaa 
  }
  const removevalue=()=>{
    setCounter(counter-1)
  }
 
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={addvalue}>
        Add
      </button>
      <br />
      <button onClick={removevalue}>Remove</button>
    </>
  )
}

export default App
