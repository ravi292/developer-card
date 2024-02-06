import { useContext, useState } from "react"
import { CountContext } from "./context/context";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
      <Count />
      </CountContext.Provider>
    </div>
  )
}

function Count() {
    const {count, setCount }= useContext(CountContext)
  return <div>
    {count}
      <Buttons setCount={setCount} count={count}/>
  </div>
}

function Buttons() {
    const {count, setCount }= useContext(CountContext)
  return <div>
    <button onClick={() => {
        setCount(count + 1)
    }}>Increase({count})</button>

    <button onClick={() => {
        setCount(count - 1)
    }}>Decrease({count})</button>
  </div>
}

export default App
