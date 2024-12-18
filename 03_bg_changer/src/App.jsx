import { useState } from "react"

function App() {
  const [colour,setColour]=useState("beige")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:colour}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{setColour("red")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>
            Red
          </button>
          <button onClick={()=>{setColour("green")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>
            Green
          </button>
          <button onClick={()=>{setColour("blue")}} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

//onclick always need a function so always we need to pass the function reference by making another function outside or callback inside we cant directly execute the setcolour() which give a return value

//as the usestate has a default on page refresh it starts with default value