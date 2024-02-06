import { useMemo, useState } from 'react'
import './App.css'

export default function App() {
    const [inputValue, setInputValue] = useState('');
    const [count, setCount] = useState(0);

    const sum = useMemo(() => {
        let value = 0;
        for(let i = 0; i<=inputValue; i++){
            value+=i;
        }
        return value;
    }, [inputValue])

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <p>Sum form 1 to {inputValue} is {sum}</p>
            <button onClick={() => setCount(count+1)}>Counter({count})</button>
        </div>
    )
}
