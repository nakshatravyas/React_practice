import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"nakshu",
    age:18,
  }
  let newArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded p-4'>Tailwind test</h1>
      <Card channel="chaiorcode" someObj={myObj} arr={newArr}/>
      <Card channel="panipuri"/>
    </>
  )
}

export default App
