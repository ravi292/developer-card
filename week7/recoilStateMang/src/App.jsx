import { useContext, useState } from 'react'
import './App.css'
import CountContext from './context'

export default function App() {
    const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={{count, setCount}}>
        <h1>Hello world</h1>
        <h2>Counter is at {count}</h2>
        <IncreaseCounter />
        <DecreaseCounter />
      </CountContext.Provider>
    </>
  )
}

function IncreaseCounter() {
    const {count, setCount} = useContext(CountContext)

    return (
        <>
        <button onClick={() => setCount(count + 1)}>Increase({count})</button>
        </>
    )
}

function DecreaseCounter() {
    const {count, setCount} = useContext(CountContext)

    return (
        <>
        <button onClick={() => setCount(count - 1)}>Decrease({count})</button>
        </>
    )
}
