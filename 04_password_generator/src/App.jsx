import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  //usestate
  const [length, setLength] = useState(8) 
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [pass, setPass] = useState("")
  const [copied,setcopied]=useState(false)

  //useref
  const passRef=useRef(null) 

  const copyToclipboard=()=>{
    passRef.current?.select() //just to give some feedback after we have taken reference that okay this is to be selected
    //passRef.current?.setSelectionRange(0,3) //to select only 3 chars...this ref gives us freedom and access to this kind of things for whom the ref is taken
    window.navigator.clipboard.writeText(pass)
    setcopied(true)
  }

  //usecallback
  const passGen = useCallback(() => { 
    setcopied(false)
    let newpass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) {
      str += "123456789"
    }
    if (charAllow) {
      str += "!@#$%^&*()_+[]{}"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      newpass += str.charAt(char)
    }
    setPass(newpass)
  }, [length, numberAllow, charAllow,setPass]) //inme change ho or re render ho inki vajah se to use optimize karo
  
  //useeffect
  useEffect(()=>{ 
    passGen()
  },[length, numberAllow, charAllow]) //or agar ye change ho to vapas password generate karo
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-4 my-8 bg-slate-500">
        <h1 className="text-center text-white m-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" ref={passRef} value={pass} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly />
          <button onClick={copyToclipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            {copied?"Copied":"Copy"}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" onChange={(e)=>{setLength(e.target.value)}} min={6} max={100} value={length} className="cursor-pointer"/>
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numcheck" defaultChecked={numberAllow} onChange={()=>setNumberAllow((prev)=>!prev)}/>
            <label htmlFor="numcheck">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="charcheck" defaultChecked={charAllow} onChange={()=>setCharAllow((prev)=>!prev)}/>
            <label htmlFor="charcheck">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
